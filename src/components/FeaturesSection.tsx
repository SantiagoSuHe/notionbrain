import React, { useState } from 'react';
import { Target, Briefcase, CheckSquare, Calendar, RefreshCcw, Layout, Inbox, BookOpen, Sun, List, Star, Compass } from 'lucide-react';
import FeatureCard from './cards/FeatureCard';
import { siteContent } from '../content/siteContent';

const TEMPLATE_FEATURES = [
  {
    icon: <Compass size={24} />,
    title: "Life Pillars",
    description: "Define the core areas of your life — Health, Career, Relationships, Finances — and make every decision answer to them. This is your anchor."
  },
  {
    icon: <Target size={24} />,
    title: "OKRs & Goal Tracking",
    description: "Translate your Life Pillars into measurable Objectives and Key Results. Track progress with precision and see your goals move from 'someday' to done."
  },
  {
    icon: <Briefcase size={24} />,
    title: "Projects",
    description: "Break down each Objective into specific Projects. Every project you open is tied to a goal, and every goal to a Pillar. No more orphaned work."
  },
  {
    icon: <Inbox size={24} />,
    title: "Inbox & Quick Capture",
    description: "Dump any idea, task, or thought instantly without losing focus. The Inbox acts as a staging area where you refine entries later — on your own terms."
  },
  {
    icon: <Sun size={24} />,
    title: "Today View",
    description: "A focused daily view showing only what's scheduled for today, grouped by Objective. See at a glance how your morning is connected to your biggest goals."
  },
  {
    icon: <Calendar size={24} />,
    title: "Interactive Calendar",
    description: "A drag-and-drop weekly and monthly calendar. Reschedule tasks by moving them — the database updates automatically. Planning that feels effortless."
  },
  {
    icon: <List size={24} />,
    title: "ASAP / On Hold / Someday",
    description: "Organize pending items by urgency. Keep your 'Someday' ideas alive without cluttering your active workflow. Everything has a place."
  },
  {
    icon: <RefreshCcw size={24} />,
    title: "Personal Journal",
    description: "A dedicated space for daily reflection and habit tracking. Build consistency and self-awareness alongside your productivity system."
  },
  {
    icon: <BookOpen size={24} />,
    title: "Knowledge Management",
    description: "Integrated databases for Book Notes and Reading Lists. Turn what you consume into what you apply. Your second brain, fully stocked."
  }
];

const STEPS = [
  {
    number: "01",
    icon: <Compass size={28} />,
    title: "Anchor Your Pillars",
    headline: "Finally define where you want to take your life.",
    description: "Set your Life Pillars — the core areas that matter most to you: Health, Career, Relationships, Finances, and more. This foundational step gives every future decision a clear 'True North' to answer to. Stop drifting. Start directing.",
    highlight: "Direction replaces drift."
  },
  {
    number: "02",
    icon: <Inbox size={28} />,
    title: "Clear Your Head",
    headline: "Capture everything. Forget nothing. Fear nothing.",
    description: "Use the Quick Capture and Inbox to offload every idea, task, and worry that lives rent-free in your head. Your brain was not designed to be a storage system — NotionBrain is. Once it's captured, it won't slip through the cracks.",
    highlight: "Mental liberation, not just organization."
  },
  {
    number: "03",
    icon: <Target size={28} />,
    title: "Execute with Certainty",
    headline: "Know that what you're doing today actually matters.",
    description: "Every task you complete links up through Projects and OKRs to your highest Life Pillars. The Daily Execution View shows you exactly what to focus on — and why. No more wondering if you're busy or actually making progress.",
    highlight: "Certainty replaces busyness."
  }
];

const FeaturesSection = () => {
  const { features } = siteContent;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="features" className="bg-white relative overflow-hidden">

      {/* ── PART 1: What's Inside the Template ── */}
      <div className="py-20 relative">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-orange-200/60">
              Everything inside the template
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Second Brain, Fully Equipped.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              NotionBrain ships with every system you need — from big-picture goal tracking to today's task list. One template, one page, one place.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEMPLATE_FEATURES.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="border-t border-gray-100 mx-8 md:mx-20" />

      {/* ── PART 2: The 3-Step System (Benefits) ── */}
      <div className="py-20 bg-gradient-to-b from-white to-orange-50/40 relative">
        <div className="absolute top-10 left-10 w-80 h-80 bg-orange-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-orange-200/60">
              How it changes your life
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Shifts. One System.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              NotionBrain is built around three fundamental breakthroughs that turn mental chaos into strategic clarity.
            </p>
          </div>

          {/* Step Tabs */}
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left: Step Selectors */}
            <div className="lg:w-2/5 space-y-4">
              {STEPS.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${activeStep === index
                      ? 'bg-orange-600/90 text-white border-orange-600 shadow-lg shadow-orange-200/50'
                      : 'bg-white/70 text-gray-700 border-gray-200 hover:border-orange-300 hover:bg-orange-50/60'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-3xl font-black ${activeStep === index ? 'text-orange-200' : 'text-orange-400'}`}>
                      {step.number}
                    </span>
                    <div>
                      <div className={`text-xs font-semibold uppercase tracking-widest mb-0.5 ${activeStep === index ? 'text-orange-200' : 'text-orange-500'}`}>
                        Step {parseInt(step.number)}
                      </div>
                      <div className={`font-bold text-lg leading-tight ${activeStep === index ? 'text-white' : 'text-gray-900'}`}>
                        {step.title}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Step Detail Panel */}
            <div className="lg:w-3/5">
              <div className="bg-white/80 backdrop-blur-md border border-orange-100 rounded-2xl p-8 shadow-xl min-h-[300px] transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 border border-orange-200/60">
                    {STEPS[activeStep].icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-0.5">Step {parseInt(STEPS[activeStep].number)}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{STEPS[activeStep].title}</h3>
                  </div>
                </div>

                <p className="text-lg font-semibold text-gray-800 mb-3">{STEPS[activeStep].headline}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{STEPS[activeStep].description}</p>

                <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full">
                  <Star size={14} className="text-orange-500" fill="currentColor" />
                  {STEPS[activeStep].highlight}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;