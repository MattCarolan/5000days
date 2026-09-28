
"use strict";
const fs=require("node:fs"),path=require("node:path"),http=require("node:http"),assert=require("node:assert/strict");
const {chromium}=require("playwright");
const root=path.resolve(__dirname,"..");
const server=http.createServer((req,res)=>{
  const pathname=decodeURIComponent(new URL(req.url,"http://localhost").pathname);
  const file=path.resolve(root,"."+ (pathname==="/" ? "/index.html" : pathname));
  if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
  fs.readFile(file,(error,data)=>{
    if(error){res.writeHead(404);return res.end();}
    res.setHeader("Content-Type",({".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".png":"image/png",".svg":"image/svg+xml"})[path.extname(file)]||"application/octet-stream");
    res.end(data);
  });
});
(async()=>{
  await new Promise(resolve=>server.listen(0,"127.0.0.1",resolve));
  const browser=await chromium.launch({headless:true,channel:"msedge"});
  try{
    const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:"reduce"});
    const errors=[];
    page.on("pageerror",error=>errors.push(error.message));
    page.on("response",response=>{if(response.status()>=400)errors.push(response.status()+" "+response.url());});
    await page.goto("http://127.0.0.1:"+server.address().port,{waitUntil:"networkidle"});
    const schema=JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
    assert.equal(schema.author.name,"Matt Carolan");
    assert.equal(schema.publisher,undefined);
    assert.equal(await page.locator('meta[name="publisher"]').count(),0);
    assert.equal(await page.locator(".publisher-line").count(),0);
    const source=await page.content();
    assert.equal((source.match(/Carolan Press/g)||[]).length,1);
    assert((await page.locator("footer").innerText()).includes("Carolan Press"));
    assert((await page.locator(".hero-facts").innerText()).includes("11"));
    assert.equal(await page.locator('#speaking .speaking-card').count(),2);
    assert.equal(await page.locator("#speaking a.button").getAttribute("href"),"https://mattcarolan.com/");
    assert.equal(await page.locator("#speaking a.button").getAttribute("rel"),"noopener noreferrer");
    await page.locator('.site-nav a[href="#speaking"]').click();
    assert.equal(new URL(page.url()).hash,"#speaking");
    await page.locator("#speaking").screenshot({path:path.join(__dirname,"speaking-desktop.png")});
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    for(const width of [768,390,320]){
      await page.setViewportSize({width,height:844});
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
      assert(await page.locator('.site-nav a[href="#speaking"]').isVisible());
      const link=await page.locator("#speaking a.button").boundingBox();
      assert(link.x>=0 && link.x+link.width<=width);
      if(width===390)await page.locator("#speaking").screenshot({path:path.join(__dirname,"speaking-mobile.png")});
      if(width===320){
        await page.locator(".site-header").screenshot({path:path.join(__dirname,"homepage-nav-mobile.png")});
      }
    }
    await page.setViewportSize({width:1440,height:1000});
    await page.locator("#chapter-tab-2").click();
    assert.equal(await page.locator(".infographic-card").count(),13);
    await page.locator(".infographic-button").first().click();
    assert(await page.locator("#lightbox").isVisible());
    await page.locator("#lightbox-image").evaluate(image=>image.decode());
    await page.keyboard.press("Escape");
    assert.equal(await page.locator("#lightbox").isVisible(),false);
    assert.deepEqual(errors,[]);
    console.log("PASS: publisher only in footer; valid Book metadata; speaker topics and contact link; desktop, tablet, and 320px/mobile layouts; existing gallery and lightbox; no runtime or asset errors.");
  }finally{await browser.close();server.close();}
})().catch(error=>{console.error(error);server.close();process.exitCode=1;});
