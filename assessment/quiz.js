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
  company: "Company Technology Change Style"
};

const screens = {
  intro: document.getElementById("intro-screen"),
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
const styleKey = document.getElementById("style-key");
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
  return ["both", "personal", "company"].includes(mode);
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
    const phase = saved.phase === "company" ? "company" : "personal";
    const maxIndex = phase === "personal" ? personalQuestions.length - 1 : companyQuestions.length - 1;

    state = {
      mode: saved.mode,
      phase: saved.mode === "personal" ? "personal" : saved.mode === "company" ? "company" : phase,
      index: Number.isInteger(saved.index) ? Math.min(Math.max(saved.index, 0), maxIndex) : 0,
      personalResponses: sanitiseResponses(saved.personalResponses, personalLetters, personalQuestions.length),
      companyResponses: sanitiseResponses(saved.companyResponses, companyLetters, companyQuestions.length),
      completed: Boolean(saved.completed)
    };
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
  if (mode === "both") return personalQuestions.length + companyQuestions.length;
  if (mode === "company") return companyQuestions.length;
  return personalQuestions.length;
}

function currentOverallPosition() {
  if (state.mode === "both" && state.phase === "company") {
    return personalQuestions.length + state.index + 1;
  }
  return state.index + 1;
}

function currentAnsweredTotal() {
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

function startAssessment(mode) {
  state = {
    mode,
    phase: mode === "company" ? "company" : "personal",
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

function getCurrentContext() {
  const personal = state.phase === "personal";
  return {
    type: personal ? "personal" : "company",
    questions: personal ? personalQuestions : companyQuestions,
    styles: personal ? personalStyles : companyStyles,
    responses: personal ? state.personalResponses : state.companyResponses,
    letters: Object.keys(personal ? personalStyles : companyStyles)
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

  styleKey.replaceChildren();
  context.letters.forEach((letter) => {
    const item = context.styles[letter];
    const span = document.createElement("span");
    span.textContent = `${letter} · ${item.shortName}`;
    styleKey.appendChild(span);
  });
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
  keyboardHint.textContent = `Keyboard: press 1–${context.letters.length} to choose, Enter to continue.`;

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
      <span class="answer-text"><strong>${letter}.</strong> ${item.answers[letter]}</span>
    `;
    if (selected === letter) option.classList.add("is-selected");
    option.addEventListener("click", () => selectAnswer(letter));
    answersElement.appendChild(option);
  });

  backButton.disabled = state.index === 0 && !(state.mode === "both" && state.phase === "company");
  nextButton.disabled = !selected;

  const isLastInSection = state.index === context.questions.length - 1;
  if (isLastInSection && state.mode === "both" && state.phase === "personal") {
    nextButton.innerHTML = `Continue to company <span aria-hidden="true">→</span>`;
  } else if (isLastInSection) {
    nextButton.innerHTML = `See my result <span aria-hidden="true">→</span>`;
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

  state.completed = true;
  saveState();
  renderResults();
}

function moveBack() {
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
      <div class="section-result-badge" aria-hidden="true">${badge}</div>
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
          ? "Treat this result as a mirror, not a verdict. These are patterns of response—not fixed traits, job roles, or measures of intelligence."
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
    resultContent.appendChild(createResultSection("company", companyResult, companyQuestions.length));
  }

  if (state.mode === "both") {
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

updateResumePanel();
