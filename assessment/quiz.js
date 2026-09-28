"use strict";

const personalQuestions = [
  {
    question: "A new technology is being discussed, but there is no clear consensus yet. What do you focus on first?",
    answers: {
      A: "Understanding how it fits into the existing system as a whole",
      B: "Identifying where it could reduce cost or improve efficiency",
      C: "Figuring out what could break if it is introduced too quickly",
      D: "Helping different stakeholders understand what it might mean for them",
      E: "Looking for assumptions that may not hold up under scrutiny",
      F: "Trying it hands-on to see what it can actually do"
    }
  },
  {
    question: "A pilot project has been approved with limited guidance. How do you approach it?",
    answers: {
      A: "Define a clear structure before expanding scope",
      B: "Track measurable outcomes from the start",
      C: "Prepare contingency plans for likely failure points",
      D: "Make sure expectations are aligned across teams",
      E: "Validate the underlying claims before committing fully",
      F: "Explore edge cases to see what is possible"
    }
  },
  {
    question: "Information about a new tool is incomplete and changing. What frustrates you most?",
    answers: {
      A: "Lack of a coherent architecture",
      B: "Inability to quantify value",
      C: "Unclear risk exposure",
      D: "Miscommunication between groups",
      E: "Vague or unsupported claims",
      F: "Not being able to experiment directly"
    }
  },
  {
    question: "Leadership wants to move quickly, but details are still fuzzy. You tend to…",
    answers: {
      A: "Ask for time to map dependencies",
      B: "Request baseline metrics",
      C: "Flag areas where things could go wrong",
      D: "Translate urgency into practical next steps for others",
      E: "Question whether the rush is justified",
      F: "Start testing to reduce uncertainty"
    }
  },
  {
    question: "A previous technology change did not go well. What lesson do you take from it?",
    answers: {
      A: "The system design was flawed",
      B: "The costs were not properly understood",
      C: "Risks were underestimated",
      D: "Stakeholders were not aligned",
      E: "Claims were accepted too easily",
      F: "Exploration was too constrained"
    }
  },
  {
    question: "When evaluating vendor material, you are most likely to…",
    answers: {
      A: "Look for architectural diagrams",
      B: "Focus on pricing and efficiency claims",
      C: "Scan for failure scenarios",
      D: "Interpret how different teams will perceive it",
      E: "Question what is not being said",
      F: "Try to access a trial or demo"
    }
  },
  {
    question: "A team is blocked waiting for clarity. You usually respond by…",
    answers: {
      A: "Proposing a structured approach",
      B: "Identifying quick efficiency wins",
      C: "Stabilizing the situation first",
      D: "Helping people move forward together",
      E: "Challenging the need for more certainty",
      F: "Running a small experiment"
    }
  },
  {
    question: "You are asked for advice on adopting a new platform. Your first instinct is to…",
    answers: {
      A: "Understand how it integrates end to end",
      B: "Evaluate return on investment",
      C: "Assess operational risk",
      D: "Consider organizational impact",
      E: "Pressure-test assumptions",
      F: "Explore capabilities directly"
    }
  },
  {
    question: "During early adoption, what role do you naturally take on?",
    answers: {
      A: "Designing structure",
      B: "Measuring outcomes",
      C: "Managing incidents",
      D: "Aligning people",
      E: "Asking hard questions",
      F: "Exploring possibilities"
    }
  },
  {
    question: "A decision needs to be made without perfect information. You feel most comfortable when…",
    answers: {
      A: "The system boundaries are clear",
      B: "There is some measurable signal",
      C: "Risks are contained",
      D: "People understand the decision",
      E: "Weak reasoning has been challenged",
      F: "You have explored it yourself"
    }
  },
  {
    question: "What do you tend to notice first during rapid change?",
    answers: {
      A: "Structural inconsistencies",
      B: "Inefficiencies",
      C: "Points of failure",
      D: "Misalignment",
      E: "Logical gaps",
      F: "New opportunities"
    }
  },
  {
    question: "A technology becomes stable and widely adopted. You usually shift toward…",
    answers: {
      A: "Refining architecture",
      B: "Optimizing performance",
      C: "Ensuring reliability",
      D: "Supporting broader understanding",
      E: "Reviewing original assumptions",
      F: "Looking for the next shift"
    }
  },
  {
    question: "When things go wrong unexpectedly, you usually…",
    answers: {
      A: "Step back to understand system interactions",
      B: "Look for process improvements",
      C: "Act quickly to contain impact",
      D: "Communicate clearly to reduce confusion",
      E: "Analyze why expectations failed",
      F: "Probe to learn what the failure reveals"
    }
  },
  {
    question: "You feel most effective when your work involves…",
    answers: {
      A: "Long-term design",
      B: "Measurable improvement",
      C: "Crisis response",
      D: "Coordination",
      E: "Evaluation",
      F: "Discovery"
    }
  },
  {
    question: "A new idea is gaining popularity internally. You tend to…",
    answers: {
      A: "Ask how it fits with existing systems",
      B: "Ask what it improves",
      C: "Ask what could go wrong",
      D: "Ask how to explain it clearly",
      E: "Ask whether it holds up logically",
      F: "Ask how to try it quickly"
    }
  },
  {
    question: "You are least comfortable when a technology change is driven by…",
    answers: {
      A: "No clear structure",
      B: "No measurable benefit",
      C: "Ignored risk",
      D: "Poor communication",
      E: "Unchallenged assumptions",
      F: "Lack of experimentation"
    }
  },
  {
    question: "In discussions, colleagues often describe you as someone who…",
    answers: {
      A: "Thinks in systems",
      B: "Focuses on efficiency",
      C: "Keeps things from breaking",
      D: "Brings people together",
      E: "Asks tough questions",
      F: "Tries new things"
    }
  },
  {
    question: "When learning about a new technology, you prefer to…",
    answers: {
      A: "Study how it is built",
      B: "Understand its economics",
      C: "Review known failure cases",
      D: "Hear how others are using it",
      E: "Read critical analyses",
      F: "Use it directly"
    }
  },
  {
    question: "A roadmap changes unexpectedly. Your reaction is usually to…",
    answers: {
      A: "Reassess the overall design",
      B: "Recalculate priorities",
      C: "Stabilize the current state",
      D: "Realign expectations",
      E: "Question the rationale",
      F: "Explore alternative paths"
    }
  },
  {
    question: "You are more likely to support adoption when…",
    answers: {
      A: "The architecture makes sense",
      B: "The efficiency gains are clear",
      C: "Risks are understood",
      D: "People are aligned",
      E: "Claims are well supported",
      F: "You have explored it yourself"
    }
  },
  {
    question: "During uncertainty, you naturally gravitate toward…",
    answers: {
      A: "Structure",
      B: "Metrics",
      C: "Stability",
      D: "Communication",
      E: "Validation",
      F: "Exploration"
    }
  },
  {
    question: "A change initiative stalls. You suspect the cause is…",
    answers: {
      A: "Poor system design",
      B: "Unclear value",
      C: "Operational risk",
      D: "Misalignment",
      E: "Weak reasoning",
      F: "Lack of experimentation"
    }
  },
  {
    question: "When reflecting on past successes, you credit them to…",
    answers: {
      A: "Thoughtful design",
      B: "Continuous optimization",
      C: "Rapid response",
      D: "Clear alignment",
      E: "Critical thinking",
      F: "Curiosity"
    }
  },
  {
    question: "Under sustained pressure, which behavior shows up most strongly for you?",
    answers: {
      A: "Designing structure",
      B: "Tuning performance",
      C: "Containing issues",
      D: "Translating across groups",
      E: "Challenging assumptions",
      F: "Exploring possibilities"
    }
  }
];

const companyQuestions = [
  {
    question: "When a new technology emerges, the company’s first response is usually to…",
    answers: {
      A: "Evaluate how it fits into long-term plans",
      B: "Assess whether it improves efficiency or reduces cost",
      C: "Test it quickly in uncertain or emerging areas",
      D: "Examine risks, controls, and governance requirements",
      E: "Reframe it to align with current strategic messaging"
    }
  },
  {
    question: "Change initiatives tend to move forward when…",
    answers: {
      A: "There is a clear, multi-year roadmap",
      B: "There is a strong business case",
      C: "Teams are given room to explore",
      D: "Approval processes are satisfied",
      E: "Leadership narrative shifts"
    }
  },
  {
    question: "When something breaks during adoption, the organization usually…",
    answers: {
      A: "Slows down to redesign",
      B: "Looks for process improvements",
      C: "Accepts disruption as part of learning",
      D: "Tightens controls",
      E: "Adjusts priorities and direction"
    }
  },
  {
    question: "Decision-making during uncertainty is best described as…",
    answers: {
      A: "Deliberate and sequential",
      B: "Metric-driven",
      C: "Fast and experimental",
      D: "Centralized and cautious",
      E: "Responsive to external signals"
    }
  },
  {
    question: "The company is most comfortable when technology change…",
    answers: {
      A: "Is predictable and steady",
      B: "Improves existing workflows",
      C: "Opens new possibilities",
      D: "Reduces exposure",
      E: "Reinforces relevance"
    }
  },
  {
    question: "Risk is generally treated as…",
    answers: {
      A: "Something to manage over time",
      B: "Something to optimize away",
      C: "Something to accept temporarily",
      D: "Something to minimize at all costs",
      E: "Something to reframe"
    }
  },
  {
    question: "New ideas gain traction primarily through…",
    answers: {
      A: "Long-term alignment",
      B: "Cost or performance data",
      C: "Proof through experimentation",
      D: "Review and approval",
      E: "Executive sponsorship"
    }
  },
  {
    question: "When priorities change, the organization usually…",
    answers: {
      A: "Adjusts plans slowly",
      B: "Rebalances resources",
      C: "Pivots quickly",
      D: "Revalidates controls",
      E: "Shifts messaging"
    }
  },
  {
    question: "Teams are rewarded most for…",
    answers: {
      A: "Stability and consistency",
      B: "Efficiency and output",
      C: "Initiative and discovery",
      D: "Compliance and reliability",
      E: "Adaptability"
    }
  },
  {
    question: "Technology adoption tends to stall when…",
    answers: {
      A: "It threatens long-term structure",
      B: "It increases cost or complexity",
      C: "Exploration runs ahead of delivery",
      D: "Governance concerns arise",
      E: "Direction becomes unclear"
    }
  },
  {
    question: "Success is most often measured by…",
    answers: {
      A: "Endurance",
      B: "Optimization",
      C: "Speed of learning",
      D: "Risk reduction",
      E: "Strategic alignment"
    }
  },
  {
    question: "The organization’s tolerance for ambiguity is…",
    answerOrder: ["D", "A", "B", "C", "E"],
    answers: {
      A: "Low",
      B: "Moderate if measurable",
      C: "High",
      D: "Very low",
      E: "Variable"
    }
  },
  {
    question: "When external conditions change, the company typically…",
    answers: {
      A: "Holds course",
      B: "Fine-tunes operations",
      C: "Experiments",
      D: "Pauses to assess",
      E: "Repositions"
    }
  },
  {
    question: "Long-term investment decisions are driven by…",
    answers: {
      A: "Stability",
      B: "Efficiency",
      C: "Opportunity",
      D: "Control",
      E: "Narrative"
    }
  },
  {
    question: "Over time, the organization tends to become more…",
    answers: {
      A: "Inertial",
      B: "Optimized",
      C: "Adaptive",
      D: "Regulated",
      E: "Fluid"
    }
  }
];

const personalStyles = {
  A: {
    name: "The Architect",
    shortName: "Architect",
    image: "images/the-architect.png",
    imageAlt: "Illustration representing The Architect",
    focus: "You focus on structure.",
    description: "When faced with technological change, you want to understand how the pieces fit together before committing. You think in systems, boundaries, and long-term consequences. Your instinct is to design something coherent rather than react to surface-level features.",
    strength: "Architects are especially valuable when a new technology needs to scale, integrate, or endure. You help prevent short-term decisions from creating long-term problems.",
    challenge: "You can struggle in environments that demand rapid action without time to think, or where decisions are made without regard for system-wide impact."
  },
  B: {
    name: "The Optimizer",
    shortName: "Optimizer",
    image: "images/the-optimizer.png",
    imageAlt: "Illustration representing The Optimizer",
    focus: "You focus on efficiency.",
    description: "You are drawn to measurable improvement. When technology changes, you look for ways to reduce waste, improve throughput, lower cost, or increase reliability. You want evidence that something works better, not just that it is new.",
    strength: "Optimizers shine once a technology becomes real enough to measure. You help organizations move from experimentation to sustainable operation.",
    challenge: "You can struggle early in a change cycle, when benefits are unclear and progress is uneven. Ambiguity can make investment feel premature."
  },
  C: {
    name: "The Firefighter",
    shortName: "Firefighter",
    image: "images/the-firefighter.png",
    imageAlt: "Illustration representing The Firefighter",
    focus: "You focus on stability.",
    description: "During change, you instinctively look for failure modes and ways to contain damage. You are calm in crises and decisive under pressure.",
    strength: "Firefighters are essential during early adoption and rapid transitions, when systems are fragile and mistakes are inevitable. You keep momentum from collapsing under its own weight.",
    challenge: "You can struggle where emergencies become the norm. Constant crisis response can crowd out long-term improvement and lead to exhaustion or resignation."
  },
  D: {
    name: "The Translator",
    shortName: "Translator",
    image: "images/the-translator.png",
    imageAlt: "Illustration representing The Translator",
    focus: "You focus on alignment.",
    description: "You notice how technology change affects people differently. Your instinct is to bridge gaps between technical and non-technical groups, leadership and delivery teams, or competing priorities.",
    strength: "Translators are critical when a change requires coordination across many stakeholders. You reduce friction, misunderstanding, and unnecessary resistance.",
    challenge: "You can struggle where communication is undervalued or where you are expected to carry alignment without authority or support."
  },
  E: {
    name: "The Skeptic",
    shortName: "Skeptic",
    image: "images/the-skeptic.png",
    imageAlt: "Illustration representing The Skeptic",
    focus: "You focus on validation.",
    description: "You question assumptions, test claims, and look for hidden costs or overlooked risks. Your instinct is not to block change, but to ensure it rests on solid reasoning.",
    strength: "Skeptics are especially valuable during periods of hype or rapid consensus, when weak ideas can spread quickly. You help organizations avoid costly mistakes and overcommitment.",
    challenge: "You can struggle in environments that equate skepticism with negativity or disloyalty. When questions are consistently dismissed, withdrawal can follow."
  },
  F: {
    name: "The Explorer",
    shortName: "Explorer",
    image: "images/the-explorer.png",
    imageAlt: "Illustration representing The Explorer",
    focus: "You focus on discovery.",
    description: "You are drawn to what is new and possible. When technology changes, you want to experiment, learn by doing, and see what emerges. You are comfortable moving without a map.",
    strength: "Explorers are invaluable early in a change cycle. You surface new capabilities, unexpected use cases, and opportunities others might miss.",
    challenge: "You can struggle once systems stabilize and novelty fades. In highly constrained environments, you may feel boxed in or restless."
  }
};

const companyStyles = {
  A: {
    name: "The Freight Train",
    shortName: "Freight Train",
    image: "images/the-freight-train.png",
    imageAlt: "Illustration representing The Freight Train",
    focus: "Built for steady, long-term movement.",
    description: "This organization carries significant weight, supports critical systems, and prioritizes reliability over speed. Decisions are deliberate, change is planned well in advance, and momentum builds slowly but powerfully once underway.",
    strength: "Freight Train organizations excel when stability matters more than novelty. They adopt new technology carefully and tend to integrate it deeply once committed.",
    challenge: "Their challenge is turning. Rapid shifts, sudden pivots, or exploratory moves feel risky and expensive. By the time change feels safe, external conditions may already have moved on.",
    motif: "rail"
  },
  B: {
    name: "The Assembly Line",
    shortName: "Assembly Line",
    image: "images/the-assembly-line.png",
    imageAlt: "Illustration representing The Assembly Line",
    focus: "Built for efficiency and repeatability.",
    description: "This organization focuses on throughput, cost control, and optimization. Technology is adopted when it improves existing workflows or measurably increases output. Everything is instrumented, measured, and refined.",
    strength: "Assembly Line organizations are excellent at scaling what already works. They extract enormous value from mature systems.",
    challenge: "Their challenge is discontinuity. Technology that initially increases cost, complexity, or uncertainty struggles to gain traction, even when long-term benefits could be substantial.",
    motif: "line"
  },
  C: {
    name: "The Off-Road Vehicle",
    shortName: "Off-Road Vehicle",
    image: "images/the-off-road-vehicle.png",
    imageAlt: "Illustration representing The Off-Road Vehicle",
    focus: "Built for uncertain terrain.",
    description: "This organization values flexibility, experimentation, and learning by doing. Teams are encouraged to explore, test assumptions, and move quickly when opportunities appear.",
    strength: "Off-Road Vehicle organizations are often early adopters. They surface new use cases and adapt rapidly to emerging technologies.",
    challenge: "Their challenge is sustainability. Exploration can outpace integration, technical debt can accumulate, and stability can suffer as the organization grows.",
    motif: "terrain"
  },
  D: {
    name: "The Control Tower",
    shortName: "Control Tower",
    image: "images/the-control-tower.png",
    imageAlt: "Illustration representing The Control Tower",
    focus: "Built for coordination and risk management.",
    description: "This organization operates in complex environments with many stakeholders, regulatory constraints, or high consequences for failure. Visibility, oversight, and consistency matter more than speed.",
    strength: "Control Tower organizations excel where safety, compliance, and coordination are essential. Decisions move through established approval paths and risk is minimized through process and control.",
    challenge: "Their challenge is responsiveness. As the environment changes faster, centralized control can become a bottleneck and innovation may happen only at the edges.",
    motif: "tower"
  },
  E: {
    name: "The Shape-Shifter",
    shortName: "Shape-Shifter",
    image: "images/the-shape-shifter.png",
    imageAlt: "Illustration representing The Shape-Shifter",
    focus: "Built to adapt to external signals.",
    description: "This organization reconfigures strategy, structure, and priorities frequently in response to market conditions, leadership changes, or competitive pressure. Narrative alignment matters as much as execution.",
    strength: "Shape-Shifter organizations are highly responsive on the surface. They adopt new language, tools, and positioning quickly and can survive volatility well.",
    challenge: "Their challenge is momentum. Constant reconfiguration makes sustained progress difficult, and teams may experience whiplash as direction changes faster than systems can absorb.",
    motif: "shift"
  }
};

const storageKey = "five-thousand-days-technology-change-assessment-v2";
const modeNames = {
  both: "Personal + Company",
  personal: "Personal Technology Change Style",
  company: "Company Technology Change Style",
  compare: "Company Comparison"
};

const screens = {
  intro: document.getElementById("intro-screen"),
  setup: document.getElementById("company-setup-screen"),
  companySwitch: document.getElementById("company-switch-screen"),
  quiz: document.getElementById("quiz-screen"),
  transition: document.getElementById("transition-screen"),
  result: document.getElementById("result-screen")
};

const modeButtons = document.querySelectorAll(".mode-button");
const resumePanel = document.getElementById("resume-panel");
const resumeTitle = document.getElementById("resume-title");
const resumeDetail = document.getElementById("resume-detail");
const resumeButton = document.getElementById("resume-button");
const discardButton = document.getElementById("discard-button");
const sidebarLabel = document.getElementById("sidebar-label");
const sidebarTitle = document.getElementById("sidebar-title");
const sidebarInstruction = document.getElementById("sidebar-instruction");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const progressTrack = document.getElementById("progress-track");
const sectionProgress = document.getElementById("section-progress");
const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question-title");
const answersElement = document.getElementById("answers");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const keyboardHint = document.getElementById("keyboard-hint");
const transitionBackButton = document.getElementById("transition-back-button");
const transitionContinueButton = document.getElementById("transition-continue-button");
const resultPageTitle = document.getElementById("result-page-title");
const resultPageIntro = document.getElementById("result-page-intro");
const resultPageBadge = document.getElementById("result-page-badge");
const resultContent = document.getElementById("result-content");
const intersectionPanel = document.getElementById("intersection-panel");
const intersectionTitle = document.getElementById("intersection-title");
const intersectionIntro = document.getElementById("intersection-intro");
const intersectionPersonalTitle = document.getElementById("intersection-personal-title");
const intersectionPersonalCopy = document.getElementById("intersection-personal-copy");
const intersectionCompanyTitle = document.getElementById("intersection-company-title");
const intersectionCompanyCopy = document.getElementById("intersection-company-copy");
const shareButton = document.getElementById("share-button");
const printButton = document.getElementById("print-button");
const restartButton = document.getElementById("restart-button");
const shareStatus = document.getElementById("share-status");

function blankResponses(length) {
  return Array(length).fill(null);
}

let state = {
  mode: null,
  phase: null,
  index: 0,
  personalResponses: blankResponses(personalQuestions.length),
  companyResponses: blankResponses(companyQuestions.length),
  completed: false
};

let latestResultText = "";
let latestShareTitle = "Technology Change Styles Assessment";

function showScreen(name) {
  Object.entries(screens).forEach(([key, screen]) => {
    const active = key === name;
    screen.hidden = !active;
    screen.classList.toggle("is-active", active);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function isValidMode(mode) {
  return ["both", "personal", "company", "compare"].includes(mode);
}

function sanitiseResponses(values, validLetters, expectedLength) {
  if (!Array.isArray(values) || values.length !== expectedLength) {
    return blankResponses(expectedLength);
  }
  return values.map((value) => validLetters.includes(value) ? value : null);
}

function loadSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved || !isValidMode(saved.mode)) return false;

    const personalLetters = Object.keys(personalStyles);
    const companyLetters = Object.keys(companyStyles);
    const phase = saved.mode === "compare" ? (saved.phase === "company2" ? "company2" : "company")
      : saved.mode === "company" ? "company" : saved.phase === "company" ? "company" : "personal";
    const maxIndex = phase === "personal" ? personalQuestions.length - 1 : companyQuestions.length - 1;

    state = {
      mode: saved.mode,
      phase: saved.mode === "personal" ? "personal" : saved.mode === "company" ? "company" : phase,
      index: Number.isInteger(saved.index) ? Math.min(Math.max(saved.index, 0), maxIndex) : 0,
      personalResponses: sanitiseResponses(saved.personalResponses, personalLetters, personalQuestions.length),
      companyResponses: sanitiseResponses(saved.companyResponses, companyLetters, companyQuestions.length),
      answerOrders: saved.answerOrders && typeof saved.answerOrders === "object" && !Array.isArray(saved.answerOrders) ? saved.answerOrders : {},
      company2Responses: sanitiseResponses(saved.company2Responses, companyLetters, companyQuestions.length),
      companyNames: normaliseCompanyNames(saved.companyNames),
      comparisonPurpose: ["career", "acquisition"].includes(saved.comparisonPurpose) ? saved.comparisonPurpose : "general",
      completed: Boolean(saved.completed)
    };
    state.completed = state.completed && currentAnsweredTotal() === totalQuestionCount();
    return true;
  } catch (error) {
    return false;
  }
}

function saveState() {
  if (!state.mode) return;
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (error) {
    // The assessment still works when local storage is unavailable.
  }
}

function clearSavedState() {
  try {
    localStorage.removeItem(storageKey);
  } catch (error) {
    // Ignore storage errors.
  }
}

function answeredCount(values) {
  return values.filter(Boolean).length;
}

function totalQuestionCount(mode = state.mode) {
  if (mode === "compare") return companyQuestions.length * 2;
  if (mode === "both") return personalQuestions.length + companyQuestions.length;
  if (mode === "company") return companyQuestions.length;
  return personalQuestions.length;
}

function currentOverallPosition() {
  if (state.mode === "compare" && state.phase === "company2") return companyQuestions.length + state.index + 1;
  if (state.mode === "both" && state.phase === "company") {
    return personalQuestions.length + state.index + 1;
  }
  return state.index + 1;
}

function currentAnsweredTotal() {
  if (state.mode === "compare") return answeredCount(state.companyResponses) + answeredCount(state.company2Responses);
  if (state.mode === "both") {
    return answeredCount(state.personalResponses) + answeredCount(state.companyResponses);
  }
  return state.phase === "company"
    ? answeredCount(state.companyResponses)
    : answeredCount(state.personalResponses);
}

function updateResumePanel() {
  const hasSavedState = loadSavedState();
  if (!hasSavedState || !state.mode) {
    resumePanel.hidden = true;
    return;
  }

  const answered = currentAnsweredTotal();
  if (answered === 0 && !state.completed) {
    resumePanel.hidden = true;
    return;
  }

  resumePanel.hidden = false;
  resumeTitle.textContent = state.completed
    ? `View your ${modeNames[state.mode]} results`
    : `Continue ${modeNames[state.mode]}`;
  resumeDetail.textContent = state.completed
    ? "Your completed result is still available on this device."
    : `${answered} of ${totalQuestionCount()} questions answered.`;
}

function startAssessment(mode, companyOptions = null) {
  if (mode === "company" && !companyOptions) {
    showScreen("setup");
    return;
  }
  state = {
    mode,
    answerOrders: {},
    companyNames: normaliseCompanyNames(companyOptions?.names),
    company2Responses: blankResponses(companyQuestions.length),
    comparisonPurpose: companyOptions?.purpose || "general",
    phase: mode === "company" || mode === "compare" ? "company" : "personal",
    index: 0,
    personalResponses: blankResponses(personalQuestions.length),
    companyResponses: blankResponses(companyQuestions.length),
    completed: false
  };
  saveState();
  renderQuestion();
  showScreen("quiz");
}

function resumeAssessment() {
  if (!state.mode) return;
  if (state.completed) {
    renderResults();
    return;
  }
  renderQuestion();
  showScreen("quiz");
}

// Store presentation order separately from style keys, so scoring stays unchanged.
// Validate on use to support older saves and discard malformed stored orders.
function getAnswerOrder(letters) {
  state.answerOrders ||= {};
  const key = `${state.phase}:${state.index}`;
  const savedOrder = state.answerOrders[key];
  if (Array.isArray(savedOrder) && savedOrder.length === letters.length
      && new Set(savedOrder).size === letters.length
      && savedOrder.every((letter) => letters.includes(letter))) {
    return savedOrder;
  }
  const order = [...letters];
  for (let index = order.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
  }
  state.answerOrders[key] = order;
  return order;
}

function getCurrentContext() {
  const personal = state.phase === "personal";
  return {
    type: personal ? "personal" : "company",
    questions: personal ? personalQuestions : companyQuestions,
    styles: personal ? personalStyles : companyStyles,
    responses: personal ? state.personalResponses : state.phase === "company2" ? state.company2Responses : state.companyResponses,
    letters: (!personal && companyQuestions[state.index].answerOrder)
      ? [...companyQuestions[state.index].answerOrder]
      : getAnswerOrder(Object.keys(personal ? personalStyles : companyStyles))
  };
}

function renderSidebar(context) {
  const isPersonal = context.type === "personal";
  sidebarLabel.textContent = isPersonal ? "Personal assessment" : "Company assessment";
  sidebarTitle.innerHTML = isPersonal
    ? "Personal Technology<br>Change Style"
    : "Company Technology<br>Change Style";
  sidebarInstruction.textContent = isPersonal
    ? "Answer as you actually behave when the path forward is unclear."
    : "Answer based on what the organization rewards and does in practice.";

  if (state.mode === "company" || state.mode === "compare") {
    sidebarLabel.textContent = state.mode === "compare"
      ? `Company ${state.phase === "company2" ? 2 : 1} of 2` : "Company assessment";
    sidebarTitle.textContent = activeCompanyName();
  }


}

function renderQuestion() {
  const context = getCurrentContext();
  const item = context.questions[state.index];
  const selected = context.responses[state.index];
  const displayNumber = String(state.index + 1).padStart(2, "0");
  const overallPosition = currentOverallPosition();
  const total = totalQuestionCount();
  const progressPercent = (overallPosition / total) * 100;

  renderSidebar(context);
  questionNumber.textContent = `${context.type.toUpperCase()} ${displayNumber}`;
  questionTitle.textContent = item.question;
  progressText.textContent = `${overallPosition} of ${total}`;
  progressFill.style.width = `${progressPercent}%`;
  progressTrack.setAttribute("aria-valuemax", String(total));
  progressTrack.setAttribute("aria-valuenow", String(overallPosition));
  sectionProgress.textContent = `${context.type === "personal" ? "Personal" : "Company"}: ${state.index + 1} of ${context.questions.length}`;
  if (state.mode === "compare") {
    questionNumber.textContent = `${activeCompanyName()} · ${displayNumber}`;
    sectionProgress.textContent = `${activeCompanyName()}: ${state.index + 1} of ${companyQuestions.length}`;
  }
  keyboardHint.textContent = `Keyboard: press 1 to ${context.letters.length} to choose, Enter to continue.`;

  answersElement.replaceChildren();
  context.letters.forEach((letter, index) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "answer-option";
    option.setAttribute("role", "radio");
    option.setAttribute("aria-checked", selected === letter ? "true" : "false");
    option.dataset.letter = letter;
    option.innerHTML = `
      <span class="answer-letter">${index + 1}</span>
      <span class="answer-text">${item.answers[letter]}</span>
    `;
    if (selected === letter) option.classList.add("is-selected");
    option.addEventListener("click", () => selectAnswer(letter));
    answersElement.appendChild(option);
  });

  backButton.disabled = state.index === 0 && !(state.mode === "both" && state.phase === "company") && state.mode !== "compare" && state.mode !== "company";
  nextButton.disabled = !selected;

  const isLastInSection = state.index === context.questions.length - 1;
  if (isLastInSection && state.mode === "compare") {
    nextButton.textContent = state.phase === "company" ? "Continue to Company 2 →" : "Compare company styles →";
  } else if (isLastInSection && state.mode === "both" && state.phase === "personal") {
    nextButton.innerHTML = `Continue to company <span aria-hidden="true">→</span>`;
  } else if (isLastInSection) {
    nextButton.innerHTML = `See your result <span aria-hidden="true">→</span>`;
  } else {
    nextButton.innerHTML = `Next question <span aria-hidden="true">→</span>`;
  }

  state.completed = false;
  saveState();
}

function selectAnswer(letter) {
  const context = getCurrentContext();
  if (!context.letters.includes(letter)) return;

  context.responses[state.index] = letter;
  answersElement.querySelectorAll(".answer-option").forEach((option) => {
    const selected = option.dataset.letter === letter;
    option.classList.toggle("is-selected", selected);
    option.setAttribute("aria-checked", selected ? "true" : "false");
  });
  nextButton.disabled = false;
  saveState();
}

function moveNext() {
  const context = getCurrentContext();
  if (!context.responses[state.index]) return;

  if (state.index < context.questions.length - 1) {
    state.index += 1;
    renderQuestion();
    showScreen("quiz");
    return;
  }

  if (state.mode === "both" && state.phase === "personal") {
    saveState();
    showScreen("transition");
    return;
  }

  if (state.mode === "compare" && state.phase === "company") {
    document.getElementById("company-switch-copy").textContent = `Next, assess ${state.companyNames[1]}.`;
    saveState();
    showScreen("companySwitch");
    return;
  }
  state.completed = true;
  saveState();
  renderResults();
}

function moveBack() {
  if (state.index === 0 && (state.mode === "company" || state.mode === "compare")) {
    if (state.phase === "company2") {
      state.phase = "company";
      state.index = companyQuestions.length - 1;
      renderQuestion();
      showScreen("quiz");
    } else {
      populateCompanySetup();
      showScreen("setup");
    }
    return;
  }
  if (state.index > 0) {
    state.index -= 1;
    renderQuestion();
    showScreen("quiz");
    return;
  }

  if (state.mode === "both" && state.phase === "company") {
    state.phase = "personal";
    state.index = personalQuestions.length - 1;
    renderQuestion();
    showScreen("quiz");
  }
}

function beginCompanySection() {
  state.phase = "company";
  state.index = Math.min(
    Math.max(state.companyResponses.findIndex((answer) => !answer), 0),
    companyQuestions.length - 1
  );
  if (state.companyResponses.every(Boolean)) state.index = companyQuestions.length - 1;
  saveState();
  renderQuestion();
  showScreen("quiz");
}

function returnToPersonalSection() {
  state.phase = "personal";
  state.index = personalQuestions.length - 1;
  saveState();
  renderQuestion();
  showScreen("quiz");
}

function calculateScores(responses, letters) {
  const scores = Object.fromEntries(letters.map((letter) => [letter, 0]));
  responses.forEach((letter) => {
    if (letter && Object.hasOwn(scores, letter)) scores[letter] += 1;
  });
  return scores;
}

function getRanking(responses, styles) {
  const letters = Object.keys(styles);
  const scores = calculateScores(responses, letters);
  return letters
    .map((letter) => ({ letter, score: scores[letter], ...styles[letter] }))
    .sort((left, right) => right.score - left.score || left.letter.localeCompare(right.letter));
}

function readableList(names) {
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

function analyseResult(responses, styles) {
  const ranking = getRanking(responses, styles);
  const topScore = ranking[0].score;
  const topStyles = ranking.filter((item) => item.score === topScore);
  const isTie = topStyles.length > 1;
  const displayName = isTie
    ? `a blend of ${readableList(topStyles.map((item) => item.shortName))}`
    : ranking[0].name;

  return {
    ranking,
    topScore,
    topStyles,
    isTie,
    primary: ranking[0],
    displayName
  };
}

function createScoreCard(type, result, responseCount) {
  const wrapper = document.createElement("div");
  wrapper.className = "score-card";
  wrapper.innerHTML = `
    <div class="score-card-header">
      <h3>Your score profile</h3>
      <span>${responseCount} responses</span>
    </div>
    <div class="score-bars"></div>
    <div class="secondary-result"></div>
  `;

  const bars = wrapper.querySelector(".score-bars");
  result.ranking.forEach((item) => {
    const row = document.createElement("div");
    row.className = "score-row";
    if (item.score === result.topScore) row.classList.add("is-top");
    const width = (item.score / responseCount) * 100;
    row.innerHTML = `
      <div class="score-row-top">
        <span>${item.letter} · ${item.shortName}</span>
        <strong>${item.score}</strong>
      </div>
      <div class="score-track" aria-label="${item.name}: ${item.score} of ${responseCount}">
        <div class="score-fill" style="width: ${width}%"></div>
      </div>
    `;
    bars.appendChild(row);
  });

  const secondary = wrapper.querySelector(".secondary-result");
  if (result.isTie) {
    secondary.innerHTML = `
      <strong>Blended result</strong>
      <p>${result.topStyles.length} styles share the top score of ${result.topScore}. Focus on the descriptions that feel most familiar under pressure.</p>
    `;
  } else {
    const secondScore = result.ranking.find((item) => item.score < result.topScore)?.score;
    const secondaryStyles = secondScore === undefined
      ? []
      : result.ranking.filter((item) => item.score === secondScore);

    if (secondScore > 0 && secondaryStyles.length === 1) {
      secondary.innerHTML = `
        <strong>Secondary influence</strong>
        <p>${secondaryStyles[0].name} scored ${secondScore}. ${type === "personal" ? "It may become more visible when you feel confident or supported." : "It may describe a strong secondary operating pattern."}</p>
      `;
    } else if (secondScore > 0 && secondaryStyles.length > 1) {
      secondary.innerHTML = `
        <strong>Secondary influences</strong>
        <p>${secondaryStyles.map((item) => item.shortName).join(", ")} share the next-highest score of ${secondScore}.</p>
      `;
    } else {
      secondary.remove();
    }
  }

  return wrapper;
}

function createPersonalVisual(result) {
  const visuals = document.createElement("div");
  visuals.className = "result-visuals";
  visuals.dataset.count = String(result.topStyles.length);
  visuals.classList.toggle("is-blend", result.topStyles.length > 1);
  visuals.setAttribute("aria-label", "Illustrations for your personal result");

  result.topStyles.forEach((item) => {
    const figure = document.createElement("figure");
    figure.className = "result-visual-item";

    const image = document.createElement("img");
    image.className = "result-visual-image";
    image.src = item.image;
    image.alt = item.imageAlt;
    image.width = 760;
    image.height = 700;
    image.decoding = "async";
    image.addEventListener("error", () => { figure.hidden = true; }, { once: true });
    figure.appendChild(image);

    if (result.topStyles.length > 1) {
      const caption = document.createElement("figcaption");
      caption.className = "result-visual-caption";
      caption.textContent = item.name;
      figure.appendChild(caption);
    }
    visuals.appendChild(figure);
  });

  return visuals;
}

function createCompanyVisual(result) {
  const visuals = document.createElement("div");
  visuals.className = "result-visuals company-result-visuals";
  visuals.dataset.count = String(result.topStyles.length);
  visuals.classList.toggle("is-blend", result.topStyles.length > 1);
  visuals.setAttribute("aria-label", "Illustrations for the company result");

  result.topStyles.forEach((item) => {
    const figure = document.createElement("figure");
    figure.className = "result-visual-item";

    const image = document.createElement("img");
    image.className = "result-visual-image";
    image.src = item.image;
    image.alt = item.imageAlt;
    image.width = 960;
    image.height = 760;
    image.decoding = "async";
    image.addEventListener("error", () => { figure.hidden = true; }, { once: true });
    figure.appendChild(image);

    if (result.topStyles.length > 1) {
      const caption = document.createElement("figcaption");
      caption.className = "result-visual-caption";
      caption.textContent = item.name;
      figure.appendChild(caption);
    }

    visuals.appendChild(figure);
  });

  return visuals;
}

function createResultSection(type, result, responseCount) {
  const personal = type === "personal";
  const section = document.createElement("section");
  section.className = `assessment-result assessment-result-${type}`;

  const topNames = readableList(result.topStyles.map((item) => item.shortName));
  const title = result.isTie
    ? personal ? "Your personal result is a blend" : "The company result is a blend"
    : result.primary.name;
  const badge = result.topStyles.map((item) => item.letter).join("");
  const focus = result.isTie
    ? `${topNames} share the highest score.`
    : result.primary.focus;
  const description = result.isTie
    ? personal
      ? "This is not an error. Most people show a blend of styles, and different patterns can become stronger depending on the environment, level of pressure, or support available."
      : "This is not an error. Organizations can show hybrid behavior, and larger companies may operate like a fleet of different vehicles across departments. One pattern may still set the strongest constraints under pressure."
    : result.primary.description;
  const strength = result.isTie
    ? personal
      ? `This blend combines the strengths of ${topNames}. Read the profile as a range rather than forcing a single label.`
      : `The organization combines characteristics of ${topNames}. This can create useful flexibility, but the dominant pattern may change by department or situation.`
    : result.primary.strength;
  const challenge = result.isTie
    ? personal
      ? "Equally strong instincts can sometimes pull in different directions. That tension can be useful, but it can also slow decisions when two approaches suggest different next steps."
      : "Hybrid behavior can make the organization harder to predict. Different groups may reward different approaches, creating inconsistent momentum and constraints."
    : result.primary.challenge;

  section.innerHTML = `
    <div class="assessment-result-heading">
      <div>
        <div class="eyebrow">${personal ? "PERSONAL TECHNOLOGY CHANGE STYLE" : "COMPANY TECHNOLOGY CHANGE STYLE"}</div>
        <h2>${title}</h2>
      </div>
      <div class="section-result-badge${badge.length > 3 ? " is-wide-blend" : ""}" aria-hidden="true">${badge}</div>
    </div>
    <div class="result-layout">
      <article class="result-main-card">
        <p class="result-focus">${focus}</p>
        <p class="result-description">${description}</p>
        <div class="result-section">
          <h3>${personal ? "Where this style is valuable" : "What this organization does well"}</h3>
          <p>${strength}</p>
        </div>
        <div class="result-section challenge-section">
          <h3>Where friction can appear</h3>
          <p>${challenge}</p>
        </div>
        <blockquote>${personal
          ? "Treat this result as a mirror, not a verdict. These are patterns of response, not fixed traits, job roles, or measures of intelligence."
          : "This result is not a measure of quality, maturity, or ambition. It describes how the organization is structurally designed to move when uncertainty appears."}</blockquote>
      </article>
      <aside class="result-sidebar" aria-label="${personal ? "Personal" : "Company"} score profile and result visual"></aside>
    </div>
  `;

  const sidebar = section.querySelector(".result-sidebar");
  sidebar.appendChild(createScoreCard(type, result, responseCount));
  sidebar.appendChild(personal ? createPersonalVisual(result) : createCompanyVisual(result));
  return section;
}

function renderIntersection(personalResult, companyResult) {
  intersectionPanel.hidden = false;
  const personalName = personalResult.isTie
    ? readableList(personalResult.topStyles.map((item) => item.shortName))
    : personalResult.primary.shortName;
  const companyName = companyResult.isTie
    ? readableList(companyResult.topStyles.map((item) => item.shortName))
    : companyResult.primary.shortName;

  intersectionTitle.textContent = `${personalName} within ${companyName}`;
  intersectionIntro.textContent = "Technology change happens at the intersection of your default way of thinking and the organization’s structural momentum. This is not a compatibility score. It is a way to see where your behavior may be amplified, dampened, or misunderstood.";
  intersectionPersonalTitle.textContent = personalResult.isTie
    ? `A blend of ${personalName}`
    : personalResult.primary.name;
  intersectionPersonalCopy.textContent = personalResult.isTie
    ? `Your strongest personal patterns share the top score. Under pressure, you may draw on several ways of reasoning rather than a single default.`
    : `${personalResult.primary.focus} ${personalResult.primary.description}`;
  intersectionCompanyTitle.textContent = companyResult.isTie
    ? `A hybrid of ${companyName}`
    : companyResult.primary.name;
  intersectionCompanyCopy.textContent = companyResult.isTie
    ? "The organization shows multiple strong operating patterns. Different departments or situations may behave like different vehicles."
    : `${companyResult.primary.focus} ${companyResult.primary.description}`;
}

function renderResults() {
  resultContent.replaceChildren();
  intersectionPanel.hidden = true;
  shareStatus.textContent = "";

  let personalResult = null;
  let companyResult = null;

  if (state.mode === "personal" || state.mode === "both") {
    personalResult = analyseResult(state.personalResponses, personalStyles);
    resultContent.appendChild(createResultSection("personal", personalResult, personalQuestions.length));
  }

  if (state.mode === "company" || state.mode === "both") {
    companyResult = analyseResult(state.companyResponses, companyStyles);
    const companySection = createResultSection("company", companyResult, companyQuestions.length);
    if (state.mode === "company") addCompanyHeading(companySection, state.companyNames?.[0] || "Company 1");
    resultContent.appendChild(companySection);
  }

  if (state.mode === "compare") {
    renderCompanyComparison();
  } else if (state.mode === "both") {
    resultPageTitle.textContent = "Your technology change profile";
    resultPageIntro.textContent = "You have identified both how you tend to move when certainty disappears and how the organization around you is structurally designed to move.";
    resultPageBadge.textContent = `${personalResult.topStyles.map((item) => item.letter).join("")} · ${companyResult.topStyles.map((item) => item.letter).join("")}`;
    renderIntersection(personalResult, companyResult);
    latestResultText = `My Personal Technology Change Style is ${personalResult.displayName}, and my company’s Technology Change Style is ${companyResult.displayName}.`;
    latestShareTitle = "My Technology Change Styles";
  } else if (state.mode === "personal") {
    resultPageTitle.textContent = "Your personal change style";
    resultPageIntro.textContent = "This result reflects the pattern that tends to show up most strongly when technology is changing and the path forward is unclear.";
    resultPageBadge.textContent = personalResult.topStyles.map((item) => item.letter).join("");
    latestResultText = `My Personal Technology Change Style is ${personalResult.displayName}.`;
    latestShareTitle = "My Personal Technology Change Style";
  } else {
    resultPageTitle.textContent = "Your company’s change style";
    resultPageIntro.textContent = "This result reflects how the organization is structurally designed to move when technology introduces uncertainty.";
    resultPageBadge.textContent = companyResult.topStyles.map((item) => item.letter).join("");
    latestResultText = `My company’s Technology Change Style is ${companyResult.displayName}.`;
    latestShareTitle = "My Company Technology Change Style";
  }

  state.completed = true;
  saveState();
  showScreen("result");
}

function restartAssessment() {
  const confirmed = window.confirm("Retake the assessment and clear your current answers?");
  if (!confirmed) return;
  clearSavedState();
  state = {
    mode: null,
    phase: null,
    index: 0,
    personalResponses: blankResponses(personalQuestions.length),
    companyResponses: blankResponses(companyQuestions.length),
    completed: false
  };
  resumePanel.hidden = true;
  showScreen("intro");
}

function copyTextFallback(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  textArea.style.top = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch (error) {
    copied = false;
  }
  textArea.remove();
  return copied;
}

async function copyShareText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      // Fall through to the older copy method.
    }
  }
  return copyTextFallback(text);
}

function canUseNativeShare(shareData) {
  if (!window.isSecureContext || typeof navigator.share !== "function") return false;
  const touchDevice = navigator.maxTouchPoints > 0
    || window.matchMedia?.("(pointer: coarse)").matches;
  if (!touchDevice) return false;
  return typeof navigator.canShare !== "function" || navigator.canShare(shareData);
}

async function shareResult() {
  shareStatus.textContent = "";
  const shareUrl = new URL(window.location.href);
  shareUrl.hash = "";
  const shareData = {
    title: latestShareTitle,
    text: `${latestResultText} Take the 5,000 Days assessment:`,
    url: shareUrl.href
  };
  const shareText = `${shareData.text} ${shareData.url}`;

  if (canUseNativeShare(shareData)) {
    try {
      await navigator.share(shareData);
      shareStatus.textContent = "Result shared.";
      return;
    } catch (error) {
      if (error && error.name === "AbortError") return;
    }
  }

  const copied = await copyShareText(shareText);
  shareStatus.textContent = copied
    ? "Result and assessment link copied to your clipboard."
    : "Copy this page address from the address bar to share your result.";
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => startAssessment(button.dataset.mode));
});
resumeButton.addEventListener("click", resumeAssessment);
discardButton.addEventListener("click", () => {
  clearSavedState();
  resumePanel.hidden = true;
  state.mode = null;
});
nextButton.addEventListener("click", moveNext);
backButton.addEventListener("click", moveBack);
transitionBackButton.addEventListener("click", returnToPersonalSection);
transitionContinueButton.addEventListener("click", beginCompanySection);
restartButton.addEventListener("click", restartAssessment);
printButton.addEventListener("click", () => window.print());
shareButton.addEventListener("click", shareResult);

document.addEventListener("keydown", (event) => {
  if (screens.quiz.hidden) return;
  const context = getCurrentContext();
  const maxKey = context.letters.length;
  if (new RegExp(`^[1-${maxKey}]$`).test(event.key)) {
    selectAnswer(context.letters[Number(event.key) - 1]);
    return;
  }
  if (event.key === "Enter" && context.responses[state.index]) {
    event.preventDefault();
    moveNext();
  }
  if (event.key === "ArrowLeft" && !backButton.disabled) {
    moveBack();
  }
});

function normaliseCompanyNames(names) {
  return [0, 1].map((index) => typeof names?.[index] === "string"
    ? names[index].trim().slice(0, 80) || `Company ${index + 1}`
    : `Company ${index + 1}`);
}

function activeCompanyName() {
  return state.companyNames?.[state.phase === "company2" ? 1 : 0] || "Company 1";
}

function populateCompanySetup() {
  document.querySelector(`input[name="company-count"][value="${state.mode === "compare" ? 2 : 1}"]`).checked = true;
  document.getElementById("company-two-fields").hidden = state.mode !== "compare";
  document.getElementById("company-one-name").value = state.companyNames?.[0] || "";
  document.getElementById("company-two-name").value = state.companyNames?.[1] || "";
}

function addCompanyHeading(section, name) {
  const heading = document.createElement("h2");
  heading.className = "company-result-name";
  heading.textContent = name;
  section.prepend(heading);
}

// Discussion prompts derived from the existing style descriptions, not a
// validated compatibility model. Sorted keys make either company order equivalent.
const companyPairGuidance = {
  AA: ["Shared stability", "Both can sustain long-term commitments and dependable delivery.", "Shared caution may delay a needed change until the opportunity has passed.", "Set a regular external-signal review and fund a small, reversible pilot outside the main roadmap."],
  AB: ["Reliability meets efficiency", "Long-term system stewardship can support repeatable, efficient operations.", "Cost or throughput targets may underfund resilience; long planning cycles may delay useful improvements.", "Agree reliability thresholds and evaluate improvements over the same investment horizon."],
  AC: ["Stability meets exploration", "Reliable systems can help promising experiments reach dependable scale.", "Applying long planning cycles to exploratory teams can remove the autonomy that made them valuable; experiments can also strain critical systems.", "Protect a pilot budget and team decision rights. Agree the evidence and reliability checks needed before scaling."],
  AD: ["Stability meets oversight", "Deliberate planning and coordinated risk management can support high-consequence work.", "Two layers of review may duplicate approvals and make course corrections difficult.", "Give each decision one accountable owner and remove duplicate gates while retaining essential safeguards."],
  AE: ["Steady delivery meets changing direction", "Sustained execution can turn market signals into durable capabilities.", "Frequent shifts may disrupt long-term commitments, while fixed plans can ignore useful new signals.", "Use a shared review cadence with explicit criteria for changing direction and protect commitments between reviews."],
  BB: ["Shared efficiency", "Both can scale proven workflows and make performance visible.", "Shared short-term targets may crowd out experiments whose value takes time to emerge.", "Separate exploration funding and learning milestones from mature-operation efficiency targets."],
  BC: ["Efficiency meets experimentation", "One can discover new approaches while the other makes successful approaches repeatable.", "Early experiments may look wasteful against production metrics; premature standardisation can stop learning.", "Use learning measures for pilots, then agree when evidence is strong enough to apply cost and throughput targets."],
  BD: ["Efficiency meets coordination", "Measurable operations and clear oversight can make delivery consistent.", "Approval requirements can impede throughput, while pressure for efficiency can weaken necessary controls.", "Map required controls together and give routine low-risk decisions a clear, fast approval route."],
  BE: ["Repeatability meets reconfiguration", "Operational discipline can turn a timely strategic shift into repeatable delivery.", "Changing priorities may repeatedly reset optimisation work and undermine agreed measures.", "Stabilise a small set of outcomes for each delivery period and make the cost of each reset visible."],
  CC: ["Shared exploration", "Both can test ideas quickly and learn in uncertain conditions.", "Experiments may multiply without enough ownership for integration, reliability, or maintenance.", "Name owners for successful pilots and reserve capacity to integrate, document, and retire experiments."],
  CD: ["Experimentation meets oversight", "Exploration can benefit from clear risk boundaries and coordination.", "Central approval can suppress experimentation; bypassing controls can expose both companies to avoidable risk.", "Create a sandbox with agreed limits, delegated decisions, and a time-bound escalation route for exceptions."],
  CE: ["Exploration meets reconfiguration", "Hands-on learning can help test a response to changing market signals.", "New narratives may redirect experiments before enough evidence is collected, creating activity without learning.", "Agree a testable hypothesis and minimum learning period before changing direction."],
  DD: ["Shared coordination", "Both can align stakeholders and manage complex dependencies.", "Overlapping oversight may obscure accountability and slow even low-risk decisions.", "Publish one decision-rights map and review approval delays with the people doing the work."],
  DE: ["Oversight meets changing direction", "Coordination can make a new direction safer to execute.", "Frequent restructuring can outpace approvals and leave ownership or controls unclear.", "Update decision owners and risk boundaries with each strategic change, using a predictable review cadence."],
  EE: ["Shared responsiveness", "Both can recognise external signals and adjust positioning quickly.", "Repeated changes may compound each other, leaving teams without sustained priorities.", "Protect a short list of commitments and require evidence plus a transition plan before the next reset."]
};

const companyPairPlans = {
  "AA": {
    "protect": "Keep both companies' system knowledge, dependable delivery, and long-term ownership. Reserve a small learning budget that does not have to wait for the next roadmap cycle.",
    "signal": "Watch the time from a new technology proposal to a first test. Repeated deferral to the next planning cycle can leave both companies learning too late.",
    "question": "Which reversible technology experiment can the two companies authorise this month without reopening their long-term plans?",
    "career": "Ask each employer for an example of a small technology experiment approved between roadmap cycles. Who could authorise it, and how long did it take?"
  },
  "AB": {
    "protect": "Preserve reliability engineering and institutional knowledge alongside workflow measurement and continuous improvement. Do not treat maintenance or learning time as waste simply because its return is harder to measure.",
    "signal": "Watch for reliability work losing funding to short-term savings, or useful improvements waiting indefinitely for roadmap approval.",
    "question": "What reliability floor and investment horizon will both companies use when deciding whether a new technology is worth adopting?",
    "career": "Ask how each employer resolves a conflict between a reliability investment and a short-term efficiency target. What would your team be expected to prioritise?"
  },
  "AC": {
    "protect": "Protect the experimental team's authority to choose tools, run small tests, and learn from failure. Preserve the steady team's operational knowledge and reliability practices, with a clear handover from pilot to production.",
    "signal": "Look for longer pilot approval times, fewer experiments, or exploratory staff leaving after new planning and reporting rules arrive. Also watch for pilots reaching production without an operational owner.",
    "question": "Which decisions can the exploratory team continue making independently, and what evidence will trigger a joint decision to move its pilot into dependable production?",
    "career": "Ask the potential employer how an exploratory team gets a pilot approved and into production. Compare the team's actual autonomy and failure tolerance with your current employer."
  },
  "AD": {
    "protect": "Keep long-term system stewardship and effective risk coordination. Agree one owner for each approval so combining the companies does not combine every layer of bureaucracy.",
    "signal": "Watch for duplicate reviews, unclear decision ownership, and low-risk technology changes queuing behind major programmes.",
    "question": "Which approval steps protect a real risk, which are duplicates, and who can authorise a low-risk technology trial without sending it through both hierarchies?",
    "career": "Ask each employer to walk through the last low-risk technology change. How many approval steps were needed, and who could resolve a delay?"
  },
  "AE": {
    "protect": "Keep the steady company's ability to finish and support commitments, and the responsive company's attention to emerging market signals. Give new signals a route into the roadmap without repeatedly resetting delivery.",
    "signal": "Watch for unfinished migrations after each strategy change, or useful external signals being dismissed because the roadmap is already fixed.",
    "question": "What evidence is strong enough to change the shared technology roadmap, and which delivery commitments will stay protected while that evidence is reviewed?",
    "career": "Ask how the prospective team protects work already under way when leadership changes direction. Compare this with the stability and responsiveness you experience now."
  },
  "BB": {
    "protect": "Keep measurement, repeatable delivery, and continuous improvement in both companies. Protect early-stage learning from efficiency targets designed for established operations.",
    "signal": "Watch for pilots cancelled before they produce useful evidence because their early cost or output compares poorly with mature systems.",
    "question": "Which learning measures and protected budget will the companies use for an unproven technology before applying production efficiency targets?",
    "career": "Ask both employers how they fund technology experiments that cannot yet demonstrate a return. What measures determine whether your work is allowed to continue?"
  },
  "BC": {
    "protect": "Keep hands-on experimentation and permission to test uncertain ideas, while preserving the ability to measure, streamline, and scale proven work. Avoid forcing exploratory work into production targets too early.",
    "signal": "Watch for fewer experiments after cost targets are harmonised, or promising pilots being scaled before integration and support costs are understood.",
    "question": "Who decides when a pilot has learned enough to become a repeatable service, and how will its funding and measures change at that point?",
    "career": "Ask the potential employer when an experiment must show a financial return and how it becomes a supported service. Compare that transition with your current company."
  },
  "BD": {
    "protect": "Keep effective operating measures and the controls that address meaningful risk. Let teams improve the process without treating every local change as an exception requiring central approval.",
    "signal": "Watch for teams bypassing controls to hit targets, or approval queues erasing the efficiency gains a new technology was meant to produce.",
    "question": "What pre-approved route can both companies offer for routine technology improvements, and which risks genuinely require escalation?",
    "career": "Ask how the team handles pressure to deliver quickly when an approval is delayed. Can it improve the process, and where are the non-negotiable boundaries?"
  },
  "BE": {
    "protect": "Keep operational discipline and measurable improvement, together with the ability to recognise when the market requires a different approach. Make the cost of switching direction visible before resetting teams.",
    "signal": "Watch for metrics and priorities changing before an adoption effort has time to produce evidence, leaving teams repeatedly starting over.",
    "question": "Which technology outcomes will stay fixed for one delivery period, and who must justify the cost of changing them before that period ends?",
    "career": "Ask how often the team's success measures change and what happens to work in progress. Compare whether each employer gives improvements enough time to pay off."
  },
  "CC": {
    "protect": "Preserve both companies' freedom to test ideas, share failures, and challenge assumptions. Assign ownership for maintenance and integration so experimentation remains sustainable.",
    "signal": "Watch for growing numbers of unsupported pilots, duplicated tooling, recurring incidents, or innovators spending all their time repairing earlier experiments.",
    "question": "Which team will own a successful joint pilot after launch, and what capacity is reserved for integration, maintenance, and retiring unsuccessful tests?",
    "career": "Ask each employer what happens after a pilot succeeds. Who maintains it, and is time protected for both exploration and the less visible work of making it dependable?"
  },
  "CD": {
    "protect": "Protect rapid experimentation and candid reporting of failed tests, alongside expertise in security, safety, and coordination. Establish an agreed sandbox with clear limits instead of requiring every experiment to follow production approval rules.",
    "signal": "Watch for experimentation moving underground, safe failures being punished, long waits for pilot approval, or controls being bypassed because the approved route is unusable.",
    "question": "Which experiments can the exploratory team run without prior approval, what boundaries must it respect, and how quickly must the oversight team decide on exceptions?",
    "career": "Ask the potential employer for a recent failed experiment and how leaders responded. Then ask which technology tests the team can approve itself and which need central permission."
  },
  "CE": {
    "protect": "Keep evidence from hands-on tests and awareness of changing external signals. Give experiments enough time to answer a question before a new narrative replaces their purpose.",
    "signal": "Watch for abandoned pilots with no recorded learning, or teams presenting activity as innovation while priorities change too quickly for results.",
    "question": "What hypothesis and minimum learning period will both companies agree before starting a pilot, and what evidence would justify stopping or redirecting it early?",
    "career": "Ask how the team decides whether to finish, stop, or redirect an experiment when strategy changes. Compare whether each employer values evidence or mainly visible activity."
  },
  "DD": {
    "protect": "Keep clear accountability, risk expertise, and constructive challenge from both companies. Consolidate overlapping controls instead of asking teams to satisfy two approval systems.",
    "signal": "Watch for decisions circulating between committees, inconsistent risk instructions, and employees becoming reluctant to raise issues because doing so only creates delays.",
    "question": "Who has final authority for each kind of technology decision, and which duplicate review can be removed without weakening the protection it provides?",
    "career": "Ask each employer who can make a final technology decision when reviewers disagree. What happens when someone challenges an existing control or proposes a faster approach?"
  },
  "DE": {
    "protect": "Keep visibility of risks and dependencies, and the ability to respond to meaningful external change. Update decision rights with each strategic shift so teams do not lose their route to approval.",
    "signal": "Watch for technology projects stalled by unclear ownership after reorganisations, or new strategic commitments announced before anyone has assessed their operational implications.",
    "question": "When strategy or structure changes, who will update the technology decision owners, risk boundaries, and active commitments before teams are expected to execute?",
    "career": "Ask how the team keeps decisions moving after a reorganisation. Compare how clearly each employer reconnects changing priorities with budgets, ownership, and approvals."
  },
  "EE": {
    "protect": "Keep both companies' awareness of customers, competitors, and emerging technology. Protect the people, learning records, and delivery commitments needed to turn a new direction into a working capability.",
    "signal": "Watch for repeated rebranding of unfinished initiatives, loss of people carrying key knowledge, or teams becoming cynical because no direction lasts long enough to deliver.",
    "question": "Which technology commitments will both companies protect through the next strategy review, and what evidence will be required before another reset?",
    "career": "Ask the prospective employer which technology commitments survived its last strategic change. Compare how each company protects continuity, accumulated learning, and the people doing the work."
  }
};

function comparisonPairs(first, second) {
  const keys = new Set();
  first.topStyles.forEach((left) => second.topStyles.forEach((right) => keys.add([left.letter, right.letter].sort().join(""))));
  return [...keys].map((key) => ({ key, guidance: companyPairGuidance[key] }));
}


function comparisonDiscussion(first, second, purpose) {
  return comparisonPairs(first, second).map(({ key }) => {
    const plan = companyPairPlans[key];
    return {
      key,
      label: key[0] === key[1] ? `Shared ${companyStyles[key[0]].shortName} pattern`
        : `${companyStyles[key[0]].shortName} + ${companyStyles[key[1]].shortName}`,
      question: purpose === "career" ? plan.career
        : purpose === "acquisition" ? plan.question + " Agree this before combining technology teams or standardising their tools."
        : plan.question
    };
  });
}

function appendComparisonText(parent, tag, text, className = "") {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) element.className = className;
  parent.appendChild(element);
  return element;
}

function createComparisonGuidance(results, names, purpose) {
  const guidance = document.createElement("section");
  guidance.className = "company-comparison company-working-guidance";

  const viewCopy = {
    general: {
      title: "How these companies could work together",
      intro: "Explore how the two companies can adopt technology together: where their strengths complement each other, where delivery could stall, and which working agreements to test."
    },
    career: {
      title: "Compare your current company with a potential employer",
      intro: "Use the two profiles to investigate the working environment you may be moving into. Focus on everyday decisions, room to experiment, and what you want to retain from your current role. This is not a personal-fit score."
    },
    acquisition: {
      title: "Considering an acquisition or merger",
      intro: "Explore what integration could put at risk, which strengths and working practices to preserve from each company, and how to detect lost innovation before it becomes normal."
    }
  };
  appendComparisonText(guidance, "h2", viewCopy[purpose].title);
  appendComparisonText(guidance, "p", viewCopy[purpose].intro);
  if (purpose !== "career") {
    comparisonPairs(...results).forEach(({ key, guidance: items }) => {
      const article = document.createElement("article");
      article.className = "company-pair";
      appendComparisonText(article, "h3", items[0]);
      appendComparisonText(article, "p", key[0] === key[1] ? `Shared ${companyStyles[key[0]].shortName} pattern` : `${companyStyles[key[0]].shortName} + ${companyStyles[key[1]].shortName}`, "eyebrow");
      const sections = purpose === "acquisition"
        ? [["What to preserve from both companies", companyPairPlans[key].protect], ["Where integration could suppress progress", items[2]], ["Early signs of lost innovation", companyPairPlans[key].signal]]
        : [["How they could adopt technology together", items[1]], ["Where adoption could stall", items[2]], ["A working agreement to try", items[3]]];
      sections.forEach(([label, copy]) => {
        appendComparisonText(article, "h4", label);
        appendComparisonText(article, "p", copy);
      });
      guidance.appendChild(article);
    });
  }

  const discussion = document.createElement("section");
  discussion.className = "company-discussion";
  appendComparisonText(discussion, "h3", purpose === "career" ? "Questions for your job comparison" : purpose === "acquisition" ? "Questions before combining the companies" : "Questions to discuss together");
  appendComparisonText(discussion, "p", `Use these questions to compare ${names[0]} with ${names[1]}. Each question below comes from a style pairing in your results.`);
  if (results.some((result) => result.isTie)) {
    appendComparisonText(discussion, "p", "Your results include tied styles, so several pairings are relevant. Start with the patterns you recognise in the teams that will actually work together.");
  }
  const list = document.createElement("ul");
  list.className = "company-discussion-list";
  comparisonDiscussion(...results, purpose).forEach(({ label, question }) => {
    const item = document.createElement("li");
    appendComparisonText(item, "h4", label);
    appendComparisonText(item, "p", question);
    list.appendChild(item);
  });
  discussion.appendChild(list);
  guidance.appendChild(discussion);

  const actionPlan = document.createElement("section");
  actionPlan.className = "company-action-plan";
  appendComparisonText(actionPlan, "h3", purpose === "career" ? "Turn the answers into a better-informed decision" : purpose === "acquisition" ? "Protect innovation during integration" : "Try a small collaboration first");
  const steps = purpose === "career" ? [
    ["Check the actual team", "Ask the hiring manager and a future colleague for recent examples of technology decisions, failed experiments, and shifting priorities. Check whether the team operates like the wider company."],
    ["Name what you want to keep", "Identify the autonomy, learning opportunities, support, and ways of working you value in your current role. Ask how those would work in the new team."],
    ["Separate evidence from impressions", "Record examples and unanswered questions before deciding. This compares company environments; it does not assess your personal fit or establish that one employer is better."]
  ] : purpose === "acquisition" ? [
    ["Protect what makes each company valuable", "Ask people in both companies which practices help them learn and deliver. Record the tools, relationships, decision rights, and specialist knowledge to preserve. Give teams a safe route to challenge proposed changes."],
    ["Test one technology together", "Choose a small, reversible pilot with a shared goal, an accountable owner from each company, and agreed risk boundaries. Protect time and funding for learning, then decide together what evidence is needed to scale, adapt, or stop."],
    ["Watch for lost momentum", "Establish a baseline before changing ways of working. Review pilot approval time, learning completed, delivery reliability, staff feedback, and loss of key people at 30, 60, and 90 days. Name someone who can remove a new bottleneck or reverse a harmful rule."]
  ] : [
    ["Agree one shared outcome", "Choose a technology problem both companies want to solve. Agree who makes decisions, which risks need joint review, and what each team can decide independently."],
    ["Run a bounded pilot", "Give a small joint team time and resources to test an approach. Define what evidence would support scaling, changing direction, or stopping."],
    ["Review how the work felt", "Compare delivery and learning with the effort needed to coordinate. Ask which practices helped and which created friction before expanding the partnership."]
  ];
  if (purpose === "acquisition") {
    appendComparisonText(actionPlan, "p", "Treat the culture and innovation practices you want to retain as explicit integration commitments. Decide what must be shared and what can remain independent before imposing common tools, targets, or approvals. Neither company's way of working should become the default solely because of ownership.");
  }
  const stepGrid = document.createElement("div");
  stepGrid.className = "company-action-grid";
  steps.forEach(([title, copy], index) => {
    const step = document.createElement("article");
    appendComparisonText(step, "span", String(index + 1).padStart(2, "0"), "eyebrow");
    appendComparisonText(step, "h4", title);
    appendComparisonText(step, "p", copy);
    stepGrid.appendChild(step);
  });
  actionPlan.appendChild(stepGrid);
  guidance.appendChild(actionPlan);
  return guidance;
}


const comparisonPerspectives = [
  { id: "general", label: "Understand how the companies could work together", shortLabel: "Working together" },
  { id: "career", label: "Compare your current company with a potential employer", shortLabel: "A potential job move" },
  { id: "acquisition", label: "Consider an acquisition or merger", shortLabel: "An acquisition or merger" }
];

function createComparisonExplorer(results, names) {
  const section = document.createElement("section");
  section.className = "comparison-explorer";
  const controls = document.createElement("div");
  controls.className = "comparison-perspectives";
  appendComparisonText(controls, "p", "EXPLORE YOUR RESULTS", "eyebrow");
  const title = appendComparisonText(controls, "h2", "What would you like to explore?");
  title.id = "comparison-perspective-title";
  appendComparisonText(controls, "p", "Choose a perspective to reveal its guidance. Only one view is shown at a time; your company profiles and scores stay the same.");
  const choices = document.createElement("div");
  choices.className = "comparison-perspective-choices";
  choices.setAttribute("role", "group");
  choices.setAttribute("aria-labelledby", title.id);
  const content = document.createElement("div");
  content.id = "comparison-perspective-content";
  const status = document.createElement("p");
  status.className = "comparison-perspective-status";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  const buttons = [];
  const panels = [];
  let currentPurpose = comparisonPerspectives.some((item) => item.id === state.comparisonPurpose) ? state.comparisonPurpose : "general";
  function update(purpose, persist = false) {
    currentPurpose = purpose;
    const selected = comparisonPerspectives.find((item) => item.id === purpose);
    if (persist) {
      state.comparisonPurpose = purpose;
      saveState();
    }
    buttons.forEach((button) => {
      const active = button.dataset.perspective === purpose;
      button.setAttribute("aria-pressed", String(active));
      button.setAttribute("aria-expanded", String(active));
    });
    panels.forEach((panel) => {
      const active = panel.dataset.view === purpose;
      panel.hidden = !active;
      // Keep inactive views empty as well as hidden, so only selected guidance
      // contributes to page length, search results, accessibility, and printing.
      panel.replaceChildren(...(active ? [createComparisonGuidance(results, names, purpose)] : []));
    });
    status.textContent = "Exploring: " + selected.shortLabel;
  }
  comparisonPerspectives.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "comparison-perspective-button";
    button.dataset.perspective = item.id;
    button.id = "comparison-perspective-" + item.id;
    const panel = document.createElement("section");
    panel.id = "comparison-view-" + item.id;
    panel.className = "comparison-view";
    panel.dataset.view = item.id;
    panel.hidden = true;
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", button.id);
    button.setAttribute("aria-controls", panel.id);
    content.appendChild(panel);
    panels.push(panel);
    const number = appendComparisonText(button, "span", String(index + 1).padStart(2, "0"), "eyebrow");
    number.setAttribute("aria-hidden", "true");
    appendComparisonText(button, "span", item.label);
    button.addEventListener("click", () => {
      if (currentPurpose !== item.id) update(item.id, true);
    });
    choices.appendChild(button);
    buttons.push(button);
  });
  controls.appendChild(choices);
  controls.appendChild(status);
  section.appendChild(controls);
  section.appendChild(content);
  update(currentPurpose);
  return section;
}

function renderCompanyComparison() {
  const names = state.companyNames;
  const results = [
    analyseResult(state.companyResponses, companyStyles),
    analyseResult(state.company2Responses, companyStyles)
  ];
  resultPageTitle.textContent = "Two companies. Two ways of adapting.";
  resultPageIntro.textContent = `${names[0]} and ${names[1]}: compare their patterns, then explore what they may need from each other.`;
  resultPageBadge.textContent = "2";

  const overview = document.createElement("section");
  overview.className = "company-comparison";
  appendComparisonText(overview, "h2", "Company styles at a glance");
  const cards = document.createElement("div");
  cards.className = "company-summary-grid";
  results.forEach((result, index) => {
    const card = document.createElement("article");
    card.className = "company-summary-card";
    card.dataset.company = String(index + 1);
    card.appendChild(createCompanyVisual(result));
    appendComparisonText(card, "p", `Company ${index + 1}`, "eyebrow");
    appendComparisonText(card, "h3", names[index]);
    appendComparisonText(card, "p", result.displayName, "comparison-style");
    appendComparisonText(card, "p", result.isTie ? "Several styles share the highest score. Consider all of them in the comparison below." : result.primary.focus);
    cards.appendChild(card);
  });
  overview.appendChild(cards);

  const chart = document.createElement("figure");
  chart.className = "company-style-chart";
  appendComparisonText(chart, "figcaption", "Different strengths. A shared picture.", "comparison-chart-title");
  appendComparisonText(chart, "p", "Each bar shows how often a style appeared in the 15 answers. Taller bars indicate a stronger pattern in this assessment. Select a style name below the chart to explore it.", "comparison-chart-description");
  const legend = document.createElement("div");
  legend.className = "comparison-chart-legend";
  names.forEach((name, index) => {
    const item = appendComparisonText(legend, "span", name);
    item.dataset.company = String(index + 1);
  });
  chart.appendChild(legend);
  const plot = document.createElement("div");
  plot.className = "comparison-chart-plot";
  const axis = document.createElement("div");
  axis.className = "comparison-chart-axis";
  axis.setAttribute("aria-hidden", "true");
  [15, 10, 5, 0].forEach((value) => appendComparisonText(axis, "span", String(value)));
  plot.appendChild(axis);
  Object.keys(companyStyles).forEach((letter) => {
    const group = document.createElement("div");
    group.className = "comparison-chart-group";
    const bars = document.createElement("div");
    bars.className = "comparison-chart-bars";
    results.forEach((result, index) => {
      const score = result.ranking.find((style) => style.letter === letter).score;
      const bar = document.createElement("div");
      bar.className = "comparison-chart-bar";
      bar.dataset.company = String(index + 1);
      bar.style.height = `${(score / companyQuestions.length) * 100}%`;
      bar.setAttribute("role", "img");
      bar.setAttribute("aria-label", `${names[index]}, ${companyStyles[letter].shortName}: ${score} of ${companyQuestions.length} answers`);
      bar.title = `${names[index]}: ${score} of ${companyQuestions.length}`;
      const value = appendComparisonText(bar, "span", String(score), "comparison-chart-value");
      value.setAttribute("aria-hidden", "true");
      bars.appendChild(bar);
    });
    group.appendChild(bars);

    const styleButton = appendComparisonText(group, "button", companyStyles[letter].shortName, "comparison-chart-label");
    styleButton.type = "button";
    styleButton.setAttribute("aria-haspopup", "dialog");
    styleButton.setAttribute("aria-controls", "company-style-dialog");
    styleButton.addEventListener("click", () => openCompanyStyleSummary(letter));

    plot.appendChild(group);
  });
  chart.appendChild(plot);
  overview.appendChild(chart);
  appendComparisonText(overview, "p", "These are perceptions of how each company behaves, not a compatibility score or a prediction of success. Company age, size, and ownership do not determine its style. Check the patterns with people in each company, especially when your knowledge comes from interviews.", "comparison-note");
  resultContent.appendChild(overview);

  resultContent.appendChild(createComparisonExplorer(results, names));

  results.forEach((result, index) => {
    const section = createResultSection("company", result, companyQuestions.length);
    addCompanyHeading(section, `Company ${index + 1}: ${names[index]}`);
    resultContent.appendChild(section);
  });
  latestResultText = `${names[0]}'s Technology Change Style is ${results[0].displayName}. ${names[1]}'s Technology Change Style is ${results[1].displayName}. This comparison highlights patterns to discuss, not a compatibility score.`;
  latestShareTitle = "Company Technology Change Style Comparison";
}

document.querySelectorAll('input[name="company-count"]').forEach((input) => {
  input.addEventListener("change", () => {
    document.getElementById("company-two-fields").hidden = input.value !== "2";
  });
});
document.getElementById("company-setup-back").addEventListener("click", () => {
  updateResumePanel();
  showScreen("intro");
});
document.getElementById("company-setup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const mode = document.querySelector('input[name="company-count"]:checked').value === "2" ? "compare" : "company";
  const options = {
    names: [document.getElementById("company-one-name").value, document.getElementById("company-two-name").value]
  };
  if ((state.mode === "company" || state.mode === "compare") && !state.completed) {
    state.mode = mode;
    state.phase = "company";
    state.index = 0;
    state.companyNames = normaliseCompanyNames(options.names);
    state.company2Responses ||= blankResponses(companyQuestions.length);
    renderQuestion();
    showScreen("quiz");
  } else {
    startAssessment(mode, options);
  }
});
document.getElementById("company-switch-back").addEventListener("click", () => {
  state.phase = "company";
  state.index = companyQuestions.length - 1;
  renderQuestion();
  showScreen("quiz");
});
document.getElementById("company-switch-continue").addEventListener("click", () => {
  state.phase = "company2";
  const unanswered = state.company2Responses.findIndex((answer) => !answer);
  state.index = unanswered === -1 ? companyQuestions.length - 1 : unanswered;
  renderQuestion();
  showScreen("quiz");
});

updateResumePanel();



function renderStyleLibrary() {
  [["company", companyStyles], ["personal", personalStyles]].forEach(([type, styles]) => {
    const grid = document.getElementById(`style-library-${type}`);
    grid.replaceChildren();
    Object.values(styles).forEach((style) => {
      const card = document.createElement("article");
      card.className = "style-library-card";
      const img = document.createElement("img");
      img.src = style.image;
      img.alt = style.imageAlt;
      img.width = type === "company" ? 960 : 760;
      img.height = type === "company" ? 760 : 700;
      img.decoding = "async";
      card.appendChild(img);
      appendComparisonText(card, "h3", style.name);
      appendComparisonText(card, "p", style.focus, "style-library-focus");
      appendComparisonText(card, "p", style.description);
      [["What this style brings", style.strength], ["Where friction can appear", style.challenge]].forEach(([label, copy]) => {
        appendComparisonText(card, "h4", label);
        appendComparisonText(card, "p", copy);
      });
      grid.appendChild(card);
    });
  });
}

function selectStyleLibraryGroup(type) {
  ["company", "personal"].forEach((group) => {
    document.getElementById(`style-library-${group}`).hidden = group !== type;
    document.getElementById(`style-library-${group}-button`).setAttribute("aria-pressed", String(group === type));
  });
}

const styleLibraryDialog = document.getElementById("style-library-dialog");
let styleLibraryReady = false;
document.getElementById("explore-styles-button").addEventListener("click", () => {
  if (!styleLibraryReady) {
    renderStyleLibrary();
    styleLibraryReady = true;
  }
  selectStyleLibraryGroup(state.mode === "personal" || state.mode === "both" ? "personal" : "company");
  styleLibraryDialog.showModal();
  styleLibraryDialog.scrollTop = 0;
  document.body.classList.add("style-library-open");
});
document.getElementById("style-library-close").addEventListener("click", () => styleLibraryDialog.close());
styleLibraryDialog.addEventListener("close", () => document.body.classList.remove("style-library-open"));
["company", "personal"].forEach((group) => {
  document.getElementById(`style-library-${group}-button`).addEventListener("click", () => selectStyleLibraryGroup(group));
});

function openCompanyStyleSummary(letter) {
  const style = companyStyles[letter];
  if (!style) return;
  const content = document.getElementById("company-style-summary");
  content.replaceChildren();
  document.getElementById("company-style-title").textContent = style.name;
  const image = document.createElement("img");
  image.src = style.image;
  image.alt = style.imageAlt;
  image.width = 960;
  image.height = 760;
  image.decoding = "async";
  content.appendChild(image);
  const copy = document.createElement("div");
  appendComparisonText(copy, "p", style.focus, "style-library-focus");
  appendComparisonText(copy, "p", style.description);
  appendComparisonText(copy, "h3", "What this style brings");
  appendComparisonText(copy, "p", style.strength);
  appendComparisonText(copy, "h3", "Where friction can appear");
  appendComparisonText(copy, "p", style.challenge);
  content.appendChild(copy);
  const dialog = document.getElementById("company-style-dialog");
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add("style-library-open");
}

const companyStyleDialog = document.getElementById("company-style-dialog");
document.getElementById("company-style-close").addEventListener("click", () => companyStyleDialog.close());
companyStyleDialog.addEventListener("close", () => document.body.classList.remove("style-library-open"));

function keepDialogTabFocus(event) {
  if (event.key !== "Tab") return;
  const dialog = event.currentTarget;
  const focusable = [...dialog.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter((element) => element.getClientRects().length > 0);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}
styleLibraryDialog.addEventListener("keydown", keepDialogTabFocus);
companyStyleDialog.addEventListener("keydown", keepDialogTabFocus);
