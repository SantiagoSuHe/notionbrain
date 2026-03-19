# NotionBrain: Deep Structural Analysis with Playwright (v4)

This document provides a highly detailed structural breakdown of https://notionbrain.space/ using Playwright's accessibility snapshot. It includes interactive elements and visual hierarchy often missed by standard text scrapers.

## 1. Global Navigation (Banner)
*   **Brand Identity:** Contains the "NotionBrain Logo" image and text "NotionBrain".
*   **Navigation Menu:**
    *   "The Problem" -> Links to `#benefits`
    *   "The System" -> Links to `#features`
    *   "Pricing" -> Links to `#pricing`
    *   "FAQ" -> Links to `#faq`
*   **Primary Action:** "Reclaim My Focus Now" (Button/Link to Gumroad).

## 2. Hero: Value Proposition
*   **Headline (H1):** "Bridge the Gap Between Your Dreams and Daily Execution."
*   **Paragraph:** Stop letting your best ideas die in the noise of daily life. NotionBrain is the single-page alignment engine that transforms mental chaos into a clear, navigable path to success. [CHANGE: "A single page Notion system designed to align your life pillars, goals, and tasks. Stop being overwhelmed and start achieving with strategic clarity."]
*   **Interactive CTAs:**
    *   "Reclaim My Focus Now" (Primary)
    *   "How Alignment Works" (Secondary, anchors to `#features`)
*   **Value Badges:** "Vertical Alignment System", "Zero-Friction Design", "Lifetime Access".[NOTE: poner "Lifetime Access" primero y además mejorar ese badget para que quede claro que es solo un pago y se tiene el template de por vida.]
*   **Proof:** "4.9/5 Rating" with star iconography.

## 3. Video & Interactive Walkthrough
*   **Headline (H2):** "A Seamless Path from Vision to Action"
*   **Subheadline:** "Most planners just list tasks. NotionBrain ensures that every minute you spend working is actually moving the needle on your life's most important goals."
*   **Video Player:** Specifically identified as a **YouTube Video Player** inside an **iframe**.
    *   *Video Title:* "My Total Life Organizer in Notion"
    *   *Interactive Elements:* Play button, Share button, and "Watch on YouTube" link.
*   **Walkthrough Tags:**
    *   "5-minute walkthrough"
    *   "See all features in action"
    *   "GTD methodology review"

## 4. Problem & Pain Points (The Burden) [DELETE THIS SECTION]
*   **Headline (H2):** "The Mental Burden You Weren't Meant to Carry"
*   **Sub-points (H3):**
    *   **Chronic Stress:** Fear of things slipping through cracks.
    *   **Decision Fatigue:** Wondering what to do vs. doing it.
    *   **The "Busy-ness" Trap:** Working hard but not moving closer to dreams.
*   **Social Proof Overlay:** "Join 500+ ambitious individuals who have offloaded their mental burden and regained control."

## 5. Technical System Features (The Second Brain) [NOTE: Quiero que me ayudes a rediseñar esta sección por completo, lo que quiero en esta sección es contar y mostrar que tiene el template, para eso puedes basarte en el archivo llm_context/thetemplate.md que describe el template]
*   **Headline (H2):** "Your Digital Second Brain: Built for Execution, Not Just Storage."
*   **Subheadline:** "NotionBrain is the bridge. It’s a proven, single-page hierarchy that forces your daily actions to answer to your highest values. When you trust your system, your brain stops remembering and starts creating."

*   **Feature Block 1:**
    *   **Visual:** **[IMAGE: Calendar integration and planning capabilities]**
    *   **Headline (H3):** "Plan your future and clear your mind"
    *   **Description:** "Visualize your tasks and deadlines with integrated calendar views. See how your daily actions connect to your bigger objectives for increased motivation and purpose."
    *   **Checklist:** Calendar integration, Task scheduling, Goal alignment, Progress tracking.

*   **Feature Block 2:**
    *   **Visual:** **[IMAGE: OKR tracking and goal achievement system]**
    *   **Headline (H3):** "Achieve your goals and get things done"
    *   **Description:** "Track your Objectives and Key Results (OKRs) with precision. Monitor progress, align daily tasks with bigger goals, and maintain focus on what truly matters."
    *   **Checklist:** OKR tracking, Progress monitoring, Task alignment, Goal achievement.

## 5.1 System Pillars (The 6 Cards) [NOTE: Usando los tres pasos que ya están listados en esta sección: **Card 4:** **Step 1: Anchor Your Pillars**, **Card 5:** **Step 2: Map Your Strategy**, **Card 6:** **Step 3: Execute with Focus**, me gustaría dejar claros los princiaples beneficios de usar este template que son: 1. Definir hacia donde quiero lleva mi vida 2. Despejar mi cabeza sin miedo a que se me olvide algo 3. Tener claridad de que las cosas que estoy haciendo me llevan a donde quiero. Para refinar bien el copy de esta sección puedes usar más contexto del archivo llm_context/vision.md y lo que te sirva del skill landing-page-copywriter]
*   **Card 1:** **Vertical Alignment** - "Every task is tied to a project, every project to an OKR, and every OKR to a Life Pillar. If it doesn't move the needle, it doesn't stay."
*   **Card 2:** **Total Mental Offloading** - "A secure, zero-friction hub to capture every thought instantly. Clear your head and focus entirely on the task at hand."
*   **Card 3:** **Unified Command Center** - "Your entire life's strategic path begins from one main dashboard, cleanly organized with focused subpages to keep distraction at bay."
*   **Card 4:** **Step 1: Anchor Your Pillars** - "Define your core values and life pillars. This is your 'True North' that filters out the noise."
*   **Card 5:** **Step 2: Map Your Strategy** - "Translate your pillars into measurable OKRs and Projects. Turn 'someday' into a visible roadmap."
*   **Card 6:** **Step 3: Execute with Focus** - "Use the Daily Execution View to tackle only what matters today. Watch your dreams become your reality, one aligned task at a time."

## 6. Pricing & Final Conversion [NOTE: Acá me gustaría dejar bien claro que es un solo pago para tener el template de por vida]
*   **Offer Section (H2):** "Stop Dreaming. Start Executing."
*   **Plan Card (H3):** "NotionBrain: The Alignment Engine"
    *   **Price:** $29 (one-time payment).
    *   **CTA:** "Build My Second Brain Today".
    *   **Includes:** List items for One-time payment, Lifetime updates, Risk Reversal, and full hierarchy.

## 7. FAQ & Support
*   **Headline (H2):** "Frequently Asked Questions"
*   **Interactive Accordions:**
    *   "How does this 'align' my life?"
    *   "Why is 'Mental Liberation' the main benefit?"
    *   "Is it hard to set up?"
    *   "Do I need a paid Notion account?"
*   **Support Link:** "Contact our support team →" (mailto:support@notionbrain.com)

## 8. Footer (Content Info)
*   **Brand Recap:** "Bridge the gap between your dreams and daily execution."
*   **Social Connectivity:** Twitter/X (@santisuhe) and "Copy email to clipboard" action.
*   **Product Sitemap:** Re-links to Problem, System, Pricing, FAQ.
*   **Copyright:** © 2026 NotionBrain.
