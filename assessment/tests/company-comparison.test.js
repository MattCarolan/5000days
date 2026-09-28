"use strict";
// Dependency-free logic checks; this DOM stub does not verify browser layout.
const fs = require("node:fs");
const path = require("node:path");

class Element {
  constructor(tag = "div") { this.tagName=tag; this.children=[]; this.hidden=false; this.dataset={}; this.style={}; this.attributes={}; this.listeners={}; this.value=""; this.checked=false; this.disabled=false; this.textContent=""; this.className=""; this.classList={toggle(){},add(){},remove(){}}; }
  set innerHTML(v) { this.html=v; this.children=[]; }
  get innerHTML() { return this.html||""; }
  setAttribute(k,v){this.attributes[k]=v;}
  appendChild(v){this.children.push(v);return v;}
  prepend(v){this.children.unshift(v);}
  replaceChildren(...v){this.children=v;}
  addEventListener(n,f){this.listeners[n]=f;}
  querySelector(s){return this.nodes?.[s] || ((this.nodes ||= {})[s]=new Element());}
  querySelectorAll(s){return s === ".answer-option" ? this.children : [];}
  createTHead(){const e=new Element("thead");this.appendChild(e);return e;}
  createTBody(){const e=new Element("tbody");this.appendChild(e);return e;}
  insertRow(){const e=new Element("tr");this.appendChild(e);return e;}
  focus(){} select(){} remove(){}
}
const elements={};
const countInputs=[new Element("input"), new Element("input")];
countInputs[0].value="1";countInputs[0].checked=true;countInputs[1].value="2";
const document={
  getElementById(id){return elements[id] ||= new Element();},
  querySelectorAll(s){return s.includes('company-count') ? countInputs : [];},
  querySelector(s){if(s.includes('company-count'))return s.includes(':checked')?countInputs.find(x=>x.checked):countInputs[s.includes('"2"')?1:0];return new Element();},
  createElement(tag){return new Element(tag);},addEventListener(){},body:new Element()
};
const saved={};
const localStorage={getItem(k){return saved[k]||null;},setItem(k,v){saved[k]=v;},removeItem(k){delete saved[k];}};
const window={scrollTo(){},confirm(){return true;},location:{href:"https://5000days.net/assessment/"},isSecureContext:false};
const navigator={};

function regressionChecks() {

const checked=[];
function assert(v,message){if(!v)throw Error(message);checked.push(message);}
function fill(letter, n) { for(let i=0;i<n;i++){selectAnswer(letter);moveNext();} }
function start(mode){ startAssessment(mode, mode==="company"||mode==="compare"?{names:["First","Second"],purpose:"acquisition"}:null); }
start("personal");fill("F",24);
assert(state.completed && latestResultText.includes("Explorer"),"Personal-only: all 24 questions and result");
start("both");fill("A",24);
assert(!screens.transition.hidden,"Combined: original transition");
beginCompanySection();fill("D",15);
assert(state.completed && latestResultText.includes("Architect") && latestResultText.includes("Control Tower"),"Combined: independent personal/company scores");
start("company");fill("B",15);
assert(state.completed && latestResultText.includes("Assembly Line"),"Single-company: 15 questions and original scoring");
startAssessment("company");
assert(!screens.setup.hidden,"Company-only opens setup");
start("compare");
assert(totalQuestionCount()===30 && currentOverallPosition()===1,"Comparison starts at 1 of 30");
fill("A",15);
assert(!screens.companySwitch.hidden && !state.completed,"Company 1 transitions without premature result");
document.getElementById("company-switch-continue").listeners.click();
assert(state.phase==="company2" && currentOverallPosition()===16 && !getCurrentContext().responses.some(Boolean),"Company 2 starts fresh at 16 of 30");
selectAnswer("C");moveNext();saveState();loadSavedState();
assert(state.phase==="company2" && state.index===1 && state.company2Responses[0]==="C" && currentAnsweredTotal()===16,"Comparison resumes with both answer sets and position");
moveBack();moveBack();
assert(state.phase==="company" && state.index===14 && getCurrentContext().responses[14]==="A","Back from second company preserves first answers");
moveNext();document.getElementById("company-switch-continue").listeners.click();fill("C",14);
assert(state.completed && state.companyResponses.every(x=>x==="A") && state.company2Responses.every(x=>x==="C"),"Two-company answers remain independent");
assert(latestResultText.includes("First") && latestResultText.includes("Second") && latestResultText.includes("Freight Train") && latestResultText.includes("Off-Road"),"Share text includes both named styles");
assert(loadSavedState() && state.completed,"Completed comparison reloads");
renderResults();
assert(resultContent.children.length===4 && intersectionPanel.hidden,"Comparison renders overview, guidance, and both detailed profiles");
assert(comparisonPairs(analyseResult(Array(15).fill("A"),companyStyles),analyseResult(Array(15).fill("C"),companyStyles))[0].key==="AC","Acquisition pairing is correct");
for (const a of "ABCDE") for(const b of "ABCDE") {
 const pair=comparisonPairs(analyseResult(Array(15).fill(a),companyStyles),analyseResult(Array(15).fill(b),companyStyles));
 if(pair.length!==1 || !pair[0].guidance)throw Error("Missing pairing "+a+b);
}
checked.push("All 25 ordered company-style pairs have guidance");
const blend=analyseResult(["A","B","C","D","E","A","B","C","D","E","A","B","C","D","E"],companyStyles);
assert(blend.topStyles.length===5 && comparisonPairs(blend,blend).length===15,"Five-way ties retain all styles and deduplicate pairing guidance");
state.companyResponses=["A","B","C","D","E","A","B","C","D","E","A","B","C","D","E"];
state.company2Responses=state.companyResponses.slice();renderResults();
assert(latestResultText.includes("blend"),"Tied comparison renders and shares as a blend");
localStorage.setItem(storageKey,JSON.stringify({mode:"company",phase:"company",index:14,companyResponses:Array(15).fill("B"),completed:true}));
assert(loadSavedState() && state.completed && state.companyNames[0]==="Company 1","Existing saved single-company results migrate");
localStorage.setItem(storageKey,JSON.stringify({mode:"compare",phase:"company2",index:999,companyResponses:["invalid"],completed:true}));
assert(loadSavedState() && !state.completed && state.index===14 && currentAnsweredTotal()===0,"Malformed saved comparison cannot appear complete");
assert(normaliseCompanyNames(["   ","x".repeat(100)])[0]==="Company 1" && normaliseCompanyNames(["a","x".repeat(100)])[1].length===80,"Blank names default and long names are bounded");
const section=new Element();addCompanyHeading(section,'<img src=x onerror=alert(1)>');
assert(section.children[0].textContent.startsWith("<img") && !section.children[0].innerHTML,"Company names are rendered as text");
restartAssessment();
assert(state.mode===null && !localStorage.getItem(storageKey) && !screens.intro.hidden,"Retake clears saved assessment");

start("company");
const originalRandom = Math.random;
try {
  Math.random = () => 0;
  state.answerOrders = {};
  renderQuestion();
  assert(getCurrentContext().letters.join("") === "BCDEA", "Answer presentation is shuffled independently of scoring keys");
  assert(answersElement.children[0].innerHTML.includes(companyQuestions[0].answers.B) && !answersElement.children[0].innerHTML.includes("<strong>B."), "Visible answers show shuffled text without style letters");
  selectAnswer(getCurrentContext().letters[0]);
  assert(state.companyResponses[0] === "B", "First displayed choice scores its actual style");
  moveNext();
  const secondOrder = getCurrentContext().letters.join("");
  moveBack();
  assert(getCurrentContext().letters.join("") === "BCDEA" && state.companyResponses[0] === "B", "Back preserves presentation order and selected answer");
  saveState(); loadSavedState();
  assert(getCurrentContext().letters.join("") === "BCDEA", "Reload preserves answer order");
  moveNext();
  assert(getCurrentContext().letters.join("") === secondOrder, "Each question retains its own order");
  state.answerOrders["company:1"] = ["A","A","A","A","A"];
  assert(new Set(getCurrentContext().letters).size === 5, "Malformed saved order is regenerated");
  start("personal");
  assert(new Set(getCurrentContext().letters).size === 6 && getCurrentContext().letters.join("") === "BCDEFA", "Personal questions also shuffle all six options");
  start("compare");
  const firstOrder = getCurrentContext().letters;
  state.phase = "company2";
  const secondCompanyOrder = getCurrentContext().letters;
  assert(firstOrder !== secondCompanyOrder && Object.keys(state.answerOrders).length === 2, "Two companies have separately stored answer orders");
} finally {
  Math.random = originalRandom;
}


start("company");
state.index = 11;
state.answerOrders["company:11"] = ["E","C","B","A","D"];
renderQuestion();
assert(getCurrentContext().letters.join("") === "DABCE", "Ordinal scale overrides random order including older saves");
assert(getCurrentContext().letters.map(letter => companyQuestions[11].answers[letter]).join("|") === "Very low|Low|Moderate if measurable|High|Variable", "Ambiguity scale runs low to high with Variable last");
selectAnswer(getCurrentContext().letters[0]);
assert(state.companyResponses[11] === "D", "Ordered scale retains original scoring");
saveState(); loadSavedState();
assert(getCurrentContext().letters.join("") === "DABCE", "Scale order survives resume");


const allCompanyResults = Object.fromEntries(Object.keys(companyStyles).map(letter => [letter, analyseResult(Array(15).fill(letter), companyStyles)]));
const uniquePairQuestions = new Set();
for (const key of Object.keys(companyPairGuidance)) {
  const plan = companyPairPlans[key];
  assert(plan && ["protect","signal","question","career"].every(field => typeof plan[field] === "string" && plan[field].length > 30), "Preservation and tailored questions exist for " + key);
  uniquePairQuestions.add(plan.question);
}
assert(uniquePairQuestions.size === 15, "Every distinct pairing has a distinct discussion question");
const generalAC = comparisonDiscussion(allCompanyResults.A, allCompanyResults.C, "general");
const generalCA = comparisonDiscussion(allCompanyResults.C, allCompanyResults.A, "general");
assert(JSON.stringify(generalAC) === JSON.stringify(generalCA), "Swapping company order retains the same relevant pair guidance");
assert(comparisonDiscussion(allCompanyResults.A, allCompanyResults.C, "career")[0].question !== generalAC[0].question, "Job comparison uses interview-specific questions");
assert(comparisonDiscussion(allCompanyResults.A, allCompanyResults.C, "acquisition")[0].question.includes("before combining technology teams"), "Acquisition questions address integration before standardisation");
assert(comparisonDiscussion(blend, blend, "general").length === 15, "Tied results include relevant questions without duplicate pairings");
const stateBeforeLibrary = JSON.stringify(state);
renderStyleLibrary();
assert(document.getElementById("style-library-company").children.length === 5 && document.getElementById("style-library-personal").children.length === 6, "Style library includes all five company and six personal styles");
selectStyleLibraryGroup("personal");
assert(document.getElementById("style-library-company").hidden && !document.getElementById("style-library-personal").hidden, "Library collection switch shows the correct group");
assert(JSON.stringify(state) === stateBeforeLibrary, "Browsing the library does not change assessment answers or results");


start("compare");
state.companyResponses=Array(15).fill("A");
state.company2Responses=Array(15).fill("C");
state.completed=true;
state.comparisonPurpose="general";
const perspectiveExplorer=createComparisonExplorer([allCompanyResults.A,allCompanyResults.C],["First","Second"]);
function descendants(node) { return [node,...node.children.flatMap(descendants)]; }
const perspectiveButtons=descendants(perspectiveExplorer).filter(node=>node.className==="comparison-perspective-button");
assert(perspectiveButtons.length===3 && perspectiveButtons[0].attributes["aria-pressed"]==="true","Results offer all three perspectives with working together selected by default");
const responsesBeforeSwitch=JSON.stringify([state.companyResponses,state.company2Responses,state.companyNames]);
perspectiveButtons[1].listeners.click();
assert(state.comparisonPurpose==="career" && state.completed,"Switching perspective preserves completion");
assert(perspectiveButtons[1].attributes["aria-pressed"]==="true" && perspectiveButtons[0].attributes["aria-pressed"]==="false","Perspective controls reflect the selected view");
assert(descendants(perspectiveExplorer).some(node=>node.textContent==="Questions for your job comparison"),"Career view renders the relevant discussion");
perspectiveButtons[2].listeners.click();
assert(descendants(perspectiveExplorer).some(node=>node.textContent==="Questions before combining the companies"),"Acquisition view renders integration questions");
assert(JSON.stringify([state.companyResponses,state.company2Responses,state.companyNames])===responsesBeforeSwitch,"All company answers and names stay unchanged across perspectives");
assert(loadSavedState() && state.comparisonPurpose==="acquisition" && state.completed,"Selected perspective persists with completed results");


for (const [index,purpose] of ["general","career","acquisition"].entries()) {
  perspectiveButtons[index].listeners.click();
  const views=descendants(perspectiveExplorer).filter(node=>node.className==="comparison-view");
  assert(views.length===3 && views.filter(view=>!view.hidden).length===1 && views.find(view=>!view.hidden).dataset.view===purpose, "Exactly one full guidance view is revealed for "+purpose);
  assert(views.filter(view=>view.hidden).every(view=>view.children.length===0), "Other perspectives add no hidden content or page length for "+purpose);
  const visibleText=descendants(views.find(view=>!view.hidden)).map(node=>node.textContent).join(" ");
  if(purpose==="career") assert(!visibleText.includes("How they could adopt technology together") && !visibleText.includes("What to preserve from both companies"),"Career results exclude collaboration and merger sections");
  if(purpose==="general") assert(!visibleText.includes("Early signs of lost innovation"),"Working-together results exclude integration-only guidance");
  if(purpose==="acquisition") assert(!visibleText.includes("A working agreement to try"),"Merger results exclude the collaboration-only section");
}

return checked;

}

const quiz = fs.readFileSync(path.join(__dirname, "..", "quiz.js"), "utf8");
const source = regressionChecks.toString();
const checks = source.slice(source.indexOf("{") + 1, source.lastIndexOf("}"));
const results = new Function("document", "window", "navigator", "localStorage", "Element", quiz + "\n" + checks)(document, window, navigator, localStorage, Element);
results.forEach((result) => console.log("PASS " + result));
console.log(results.length + " checks passed.");

