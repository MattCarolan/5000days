
"use strict";
const fs = require("node:fs");
const path = require("node:path");
const http = require("node:http");
const assert = require("node:assert/strict");
const { chromium } = require("playwright");
const root = path.resolve(process.env.ASSESSMENT_ROOT || path.join(__dirname, "../assessment"));
const output = __dirname;
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  const target = path.resolve(root, "." + (pathname === "/" ? "/index.html" : pathname));
  if (!target.startsWith(root + path.sep)) { res.writeHead(403); return res.end(); }
  fs.readFile(target, (error, content) => {
    if(error) { res.writeHead(404); return res.end(); }
    const mime = {".html":"text/html; charset=utf-8", ".js":"text/javascript; charset=utf-8", ".css":"text/css; charset=utf-8", ".png":"image/png"};
    res.setHeader("Content-Type", mime[path.extname(target)] || "application/octet-stream");
    res.end(content);
  });
});
(async () => {
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  const browser = await chromium.launch({headless:true, channel:"msedge"});
  try {
    const page = await browser.newPage({viewport:{width:1440,height:1100},deviceScaleFactor:1});
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("response", response => { if(response.status() >= 400 && !response.url().includes("favicon")) errors.push(response.status()+" "+response.url()); });
    await page.goto("http://127.0.0.1:"+server.address().port);
    await page.locator('[data-mode="company"]').click();
    await page.locator('input[name="company-count"][value="2"]').check();
    await page.locator("#company-one-name").fill("Northstar Systems");
    await page.locator("#company-two-name").fill("Bright Ideas");
    assert.equal(await page.locator("#company-comparison-purpose").count(),0);
    await page.locator('#company-setup-form button[type="submit"]').click();
    const first = [..."AAAAAAABBBDD DCE".replace(/ /g,"")];
    const second = [..."CCCCCCCCEEEBBAD"];
    assert.equal(first.length,15); assert.equal(second.length,15);
    const expectedScale = ["Very low","Low","Moderate if measurable","High","Variable"];
    for (const [company,answers] of [first,second].entries()) {
      for(let i=0;i<answers.length;i++){
        if(i===11){
          assert.deepEqual(await page.locator(".answer-text").allTextContents(),expectedScale);
          await page.locator('#back-button').click();
          await page.locator('#next-button').click();
          assert.deepEqual(await page.locator(".answer-text").allTextContents(),expectedScale);
          await page.reload();
          await page.locator("#resume-button").click();
          assert.deepEqual(await page.locator(".answer-text").allTextContents(),expectedScale);
        }
        await page.locator('.answer-option[data-letter="'+answers[i]+'"]').click();
        await page.locator("#next-button").click();
      }
      if(company===0) await page.locator("#company-switch-continue").click();
    }
    await page.locator("#result-screen").waitFor({state:"visible"});

    assert.equal(await page.locator('[data-perspective="general"]').getAttribute("aria-pressed"),"true");
    const originalProfiles = await page.locator(".company-summary-grid").innerText();
    const originalBars = await page.locator(".comparison-chart-bar").evaluateAll(bars=>bars.map(bar=>bar.getAttribute("aria-label")));
    const originalAnswers = await page.evaluate(()=>JSON.stringify([state.companyResponses,state.company2Responses,state.companyNames,state.answerOrders]));
    for (const [purpose,heading] of [["career","Questions for your job comparison"],["acquisition","Questions before combining the companies"],["general","Questions to discuss together"]]) {
      const button=page.locator('[data-perspective="'+purpose+'"]');
      await button.focus();
      await page.keyboard.press("Space");
      assert.equal(await button.getAttribute("aria-pressed"),"true");
      assert(await button.evaluate(el=>el===document.activeElement));
      assert.equal(await page.locator(".company-discussion > h3").innerText(),heading);

      assert.equal(await page.locator(".comparison-view:visible").count(),1);
      assert.equal(await page.locator(".comparison-view[hidden]").count(),2);
      assert.equal(await page.locator(".comparison-view[hidden] > *").count(),0);
      assert.equal(await page.locator(".company-working-guidance").count(),1);
      assert.equal(await page.locator(".comparison-view:visible").getAttribute("data-view"),purpose);
      const expectedTitle = {
        general:"How these companies could work together",
        career:"Compare your current company with a potential employer",
        acquisition:"Considering an acquisition or merger"
      }[purpose];
      assert.equal(await page.locator(".company-working-guidance > h2").innerText(),expectedTitle);
      const activeText=await page.locator(".comparison-view:visible").innerText();
      if(purpose==="career"){
        assert.equal(await page.locator(".company-pair").count(),0);
        assert(!activeText.includes("Protect innovation during integration"));
        assert(!activeText.includes("How they could adopt technology together"));
      } else if(purpose==="general"){
        assert(!activeText.includes("What to preserve from both companies"));
        assert(!activeText.includes("Questions for your job comparison"));
      } else {
        assert(!activeText.includes("A working agreement to try"));
        assert(!activeText.includes("Questions for your job comparison"));
      }
      await page.emulateMedia({media:"print"});
      assert.equal(await page.locator(".comparison-view:visible").count(),1);
      assert.equal(await page.locator(".comparison-view:visible").getAttribute("data-view"),purpose);
      await page.emulateMedia({media:"screen"});
      await page.locator(".comparison-explorer").screenshot({path:path.join(output,"selected-view-"+purpose+".png")});

      assert.equal(await page.locator(".company-summary-grid").innerText(),originalProfiles);
      assert.deepEqual(await page.locator(".comparison-chart-bar").evaluateAll(bars=>bars.map(bar=>bar.getAttribute("aria-label"))),originalBars);
      assert.equal(await page.evaluate(()=>JSON.stringify([state.companyResponses,state.company2Responses,state.companyNames,state.answerOrders])),originalAnswers);
      assert.equal(await page.evaluate(()=>state.completed),true);
    }
    await page.locator('[data-perspective="acquisition"]').click();
    await page.reload();
    await page.locator("#resume-button").click();
    assert.equal(await page.locator('[data-perspective="acquisition"]').getAttribute("aria-pressed"),"true");
    assert.equal(await page.evaluate(()=>JSON.stringify([state.companyResponses,state.company2Responses,state.companyNames,state.answerOrders])),originalAnswers);
    await page.locator(".comparison-perspectives").screenshot({path:path.join(output,"results-perspectives-desktop.png")});
    await page.setViewportSize({width:320,height:740});
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    await page.locator(".comparison-perspectives").screenshot({path:path.join(output,"results-perspectives-mobile.png")});

    for(const purpose of ["career","general","acquisition"]) {
      await page.locator('[data-perspective="'+purpose+'"]').click();
      assert.equal(await page.locator(".comparison-view:visible").count(),1);
      assert.equal(await page.locator(".comparison-view:visible").getAttribute("data-view"),purpose);
      assert.equal(await page.locator(".comparison-view[hidden] > *").count(),0);
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    }

    await page.setViewportSize({width:1440,height:1100});

    await page.evaluate(async()=>{await Promise.all([...document.images].map(img=>img.decode().catch(()=>{})));});
    assert.equal(await page.locator(".comparison-chart-bar").count(),10);
    assert.equal(await page.locator(".company-summary-card img").count(),2);
    assert(await page.locator("#result-screen img").evaluateAll(images=>images.every(img=>img.complete && img.naturalWidth>0)));

    const labelNames=["Freight Train","Assembly Line","Off-Road Vehicle","Control Tower","Shape-Shifter"];
    const stateBeforeSummary = await page.evaluate(()=>({state:JSON.stringify(state),saved:localStorage.getItem(storageKey)}));
    for(let i=0;i<labelNames.length;i++) {
      const button=page.locator(".comparison-chart-label").nth(i);
      assert.equal(await button.getAttribute("aria-haspopup"),"dialog");
      await button.click();
      assert.equal(await page.locator("#company-style-title").innerText(),"The "+labelNames[i]);
      await page.locator("#company-style-summary img").evaluate(img=>img.decode());
      assert(await page.locator("#company-style-summary img").evaluate(img=>img.naturalWidth>0));
      assert((await page.locator("#company-style-summary").innerText()).includes("Where friction can appear"));
      if(i===0) {
        await page.waitForTimeout(600);
        console.log("Summary geometry", await page.locator("#company-style-dialog").boundingBox());
        await page.locator("#company-style-dialog").screenshot({path:path.join(output,"style-summary-desktop.png")});
      }
      await page.keyboard.press("Escape");
      await page.waitForFunction(()=>!document.getElementById("company-style-dialog").open);
      assert(await button.evaluate(el=>el===document.activeElement));
    }
    assert.deepEqual(await page.evaluate(()=>({state:JSON.stringify(state),saved:localStorage.getItem(storageKey)})),stateBeforeSummary);

    assert.equal(await page.locator("#style-key").count(),0);
    assert(!/[—–]/.test(await page.locator("#result-screen").innerText()));
    await page.locator(".company-comparison").first().screenshot({path:path.join(output,"comparison-desktop.png")});
    await page.setViewportSize({width:390,height:844});
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    await page.locator(".company-comparison").first().screenshot({path:path.join(output,"comparison-mobile.png")});
    await page.setViewportSize({width:1440,height:1100});
    await page.evaluate(()=>{ state.companyResponses=Array(3).fill(["A","B","C","D","E"]).flat(); state.company2Responses=[...state.companyResponses]; renderResults(); });
    await page.evaluate(async()=>{await Promise.all([...document.images].map(img=>img.decode().catch(()=>{})));});
    assert.equal(await page.locator(".company-summary-card img").count(),10);
    assert.equal(await page.locator(".company-pair").count(),15);
    assert(await page.locator("#result-screen img").evaluateAll(images=>images.every(img=>img.complete && img.naturalWidth>0)));
    await page.setViewportSize({width:390,height:844});
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    await page.locator(".company-comparison").first().screenshot({path:path.join(output,"comparison-tie-mobile.png")});
    await page.emulateMedia({media:"print"});
    assert.equal(await page.locator(".company-style-chart").isVisible(),true);

    await page.emulateMedia({media:"screen"});
    for (const mode of ["personal","both","company","compare"]) {
      await page.evaluate(mode => {
        startAssessment(mode, mode === "company" || mode === "compare" ? {names:["Northstar Systems","Bright Ideas"],purpose:"acquisition"} : null);
        state.personalResponses=Array(24).fill("F");
        state.companyResponses=Array(15).fill("A");
        state.company2Responses=Array(15).fill("C");
        renderResults();
      }, mode);
      await page.setViewportSize({width:1440,height:1100});
      assert.equal(await page.locator("#explore-styles-button").isVisible(),true);
      const before = await page.evaluate(()=>({state:JSON.stringify(state),saved:localStorage.getItem(storageKey)}));
      await page.locator("#explore-styles-button").click();
      assert.equal(await page.locator("#style-library-dialog").isVisible(),true);
      assert.equal(await page.locator("#style-library-company .style-library-card").count(),5);
      assert.equal(await page.locator("#style-library-personal .style-library-card").count(),6);
      const initialGroup = mode === "personal" || mode === "both" ? "personal" : "company";
      assert.equal(await page.locator("#style-library-"+initialGroup).isVisible(),true);
      await page.locator("#style-library-company-button").click();
      await page.evaluate(async()=>{await Promise.all([...document.querySelectorAll("#style-library-dialog img")].map(img=>img.decode().catch(()=>{})));});
      assert(await page.locator("#style-library-dialog img").evaluateAll(images=>images.every(img=>img.complete && img.naturalWidth>0)));
      if(mode==="compare"){
        await page.locator("#style-library-dialog").screenshot({path:path.join(output,"all-styles-desktop.png")});
        await page.setViewportSize({width:320,height:740});
        assert(await page.locator("#style-library-dialog").evaluate(el=>el.scrollWidth<=el.clientWidth));
        await page.locator("#style-library-dialog").screenshot({path:path.join(output,"all-styles-mobile.png")});
      }
      await page.locator("#style-library-personal-button").click();
      assert.equal(await page.locator("#style-library-personal").isVisible(),true);
      assert.equal(await page.locator("#style-library-company").isVisible(),false);
      for(let i=0;i<6;i++) {
        await page.keyboard.press("Tab");
        assert(await page.evaluate(()=>!!document.activeElement.closest("#style-library-dialog")));
      }
      await page.keyboard.press("Escape");
      await page.waitForFunction(()=>!document.getElementById("style-library-dialog").open && !document.body.classList.contains("style-library-open"));
      assert(await page.locator("#explore-styles-button").evaluate(el=>el===document.activeElement));
      assert.deepEqual(await page.evaluate(()=>({state:JSON.stringify(state),saved:localStorage.getItem(storageKey)})),before);
      await page.locator("#explore-styles-button").click();
      await page.locator("#style-library-close").click();
      await page.waitForFunction(()=>!document.getElementById("style-library-dialog").open);
    }
    await page.setViewportSize({width:1440,height:1100});
    assert((await page.locator(".company-discussion-list").innerText()).includes("exploratory team"));
    await page.locator(".company-working-guidance").screenshot({path:path.join(output,"tailored-company-guidance.png")});
    await page.setViewportSize({width:320,height:740});
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    await page.locator(".comparison-chart-label").first().click();
    await page.locator("#company-style-dialog").screenshot({path:path.join(output,"style-summary-mobile.png")});
    assert(await page.locator("#company-style-dialog").evaluate(el=>el.scrollWidth<=el.clientWidth));
    await page.locator("#company-style-close").click();
    await page.waitForFunction(()=>!document.getElementById("company-style-dialog").open);

    assert.deepEqual(errors,[]);
    console.log("PASS: complete two-company UI, logical scale order after back/reload for both companies, images, 10 bars, ties, mobile overflow, print visibility, no runtime or asset errors.");
  } finally { await browser.close(); server.close(); }
})().catch(error=>{console.error(error); server.close(); process.exitCode=1;});
