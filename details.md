# Design Requirement Specification Document (DRSD)

**Project Name:** Vector Labs AI - Enterprise Web Application & Dashboard Platform
**Version:** 1.0.0
**Date:** June 1, 2026
**File Name:** details.md

---

## 1. Document Control & Revision History

| Version | Date | Description | Author |
| :---: | :---: | :--- | :---: |
| 1.0.0 | 2026-06-01 | Initial Release of Technical Design Requirements | Technical Lead |
| 2.0.0 | 2026-06-01 | Added Landing Page Content Wireframes, Chatbots and Online Tools Specifications | Project Lead |

---

## 2. Introduction & Project Scope

This document outlines the detailed layout, UI/UX structure, and system constraints required for the implementation of the Vector Labs AI web portal. The ultimate goal is to bridge software performance, structural UI grids, and high-tech user experiences into a cohesive development plan.

### 2.1 Scope of the System
The website acts as a modular, responsive workspace featuring real-time interactive panels, institutional AI tool delivery mechanisms, and advanced administrative dashboards tailored for high-performance enterprise engagement.

---

## 3. Architecture & Technology Stack

To ensure modern execution speeds and clean codebase management, the website architecture follows a highly decoupled and typed schema structure.

*   **Frontend Engine:** Next.js (App Router) combined with React 19 to facilitate fast server-side rendering and static optimization.
*   **Styling & Components:** Tailwind CSS for programmatic styling paired with Shadcn/UI for accessible UI blocks and functional layout controls.
*   **Backend API Layer:** Node.js (TypeScript) or Python FastAPI to securely process relational database payloads.
*   **Database Layer:** PostgreSQL for transactional tables, complemented by Redis cache layers for performance optimization.

---

## 4. Functional Requirements

| Module ID | Feature Block | Functional Specification |
| :---: | :--- | :--- |
| **FR-101** | Role-Based Access Control (RBAC) | Enables multi-tier administrative permissions (Admin, Manager, User) controlling access to management panels and secure dashboards. |
| **FR-102** | Modular Information Dashboard | A high-density UI layout that visualizes specific program modules, calendar updates, and key technical performance statistics. |
| **FR-103** | Unified Content Manager | Allows rapid creation, editing, and archiving of course schedules, marketing announcements, and structural updates without direct code redeployments. |

---

## 5. UI/UX Design Requirements

The user interface emphasizes absolute structural clarity, modern dark/light system flexibility, and an advanced layout presentation framework.

### 5.1 Typography & Visual Grid
The system must deploy geometric, clean sans-serif typography stacks (e.g., Google Sans, Inter, or Arial) enforcing explicit size hierarchies across headings and component elements.

### 5.2 Adaptive Theming Strategy (Dark / Light Mode)
All visual screens must adapt perfectly to the user's system dark mode flag. Under the dark theme, the interface shall adopt a dark layout baseline with extreme high-contrast, crisp component borders, ensuring visibility and reducing screen eye strain.

### 5.3 Dashboard Architecture (Bento Grid Layout)
Data elements, calendar notifications, and charts will be nested in an adaptable Bento Grid module structure. Blocks must scale fluidly across varied display resolutions while preserving strict geometric constraints.

### 5.4 Page Architecture & Main Landing Page Wireframe
The landing page architecture is organized to maximize corporate credibility and structure information seamlessly for potential clients.

#### 1. Hero Section (The First Impression)
*   **Visual Layout:** Prominent logo from `image (1).jpg` rendered alongside a high-tech abstract 3D video loop or particle background asset.
*   **Headline (Value Proposition):** *"Architecting the Future of Intelligence."*
*   **Sub-headline:** *"From custom machine learning models to seamless IoT integrations, Vector Labs AI delivers cutting-edge, enterprise-grade AI solutions from the heart of South Korea's tech ecosystem."*
*   **Call to Action (CTA):** Glowing cyan element specifying "Request a Consultation" or "Explore Our Solutions".

#### 2. About Us Section (Building Trust)
*   **The Story:** Focuses on Vector Labs AI being founded on May 20, 2026, with a primary organizational mission to democratize deep learning and advanced software development globally.
*   **Leadership Team Profiles:**
    *   **Thathsara Nanayakkara** | Founder & CEO
    *   **Indunil Samayamanthtree** | Co-Founder
    *   *Design Directive: Include high-quality, professional LinkedIn-style headshots for the leadership block.*

#### 3. Services / Business Purpose (Structured for Clarity)
Don't just list your bullet points; categorize them so corporate clients can digest them instantly.

| Category | Offered Services |
| :--- | :--- |
| **Core AI & Analytics** | • Machine Learning & Deep Learning Model Dev<br>• Computer Vision Solutions<br>• Advanced Data Analytics |
| **Smart Systems & Consulting** | • IoT-Integrated AI Systems<br>• AI Consulting & Corporate System Integration |
| **Custom Software Engineering** | • Custom Web, Software, & Tool Development<br>• Enterprise Mobile Application Development |
| **Next-Gen Content & Support** | • AI Video Creation & Digital Content Production<br>• 24/7 Software Maintenance & Technical Support |

#### 4. Contact & Footer (Local Credibility)
Because you are registered in South Korea, leveraging your physical address builds immense trust with international clients.
*   **Contact Form Capture:** Simplified form elements capturing Name, Email, Company, and Project Brief fields.
*   **Physical Office Location Address:** `12, Garak-ro 64beon-gil, Gimhae-si, Gyeongsangnam-do, 50921, Republic of Korea`
*   **Copyright Stamp:** © 2026 Vector Labs AI. All rights reserved.

### 5.5 Chatbots and Online Tools Architecture Page
A dedicated secondary view or sub-page showcasing built-in interactive AI micro-applications targeted at local user needs and localized guidelines.

| Tool / Chatbot Identifier | Localization & Language Mapping | Functional Intent / Description |
| :---: | :---: | :--- |
| **1. K-Visa (AI Chatbot)** | කොරියා වීසා සහායක<br>(Korea Visa Guide) | Provides a guided contextual interface for visa inquiries, document checklist queries, and standard compliance workflows for South Korean visa applicants. |
| **2. K-Driving Licence (AI Chatbot)** | කොරියා රියදුරු බලපත්‍ර සහායක<br>(Korea Driving Licence Guide) | Assists users with structural guidelines, exam procedures, registration documentation, and localized rule matching for obtaining a Korean driving licence. |

---

## 6. Non-Functional Requirements

1.  **Performance & Speed:** Core Web Vitals targets mandate a First Contentful Paint (FCP) below 1.2 seconds and an overall Google Lighthouse performance rating of 90+.
2.  **Security Implementation:** Full TLS 1.3 protocol enforcement, automated JWT expiry cycles, API rate limiting, and encrypted storage configurations at rest.
3.  **Accessibility Compliance:** Strict implementation of WCAG 2.1 Level AA benchmarks across all client components to support cross-browser accessibility and screen readers.
