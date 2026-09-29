# Khan Group of Companies — Official Enterprise Web Platform

An ultra-modern, high-performance corporate conglomerate web platform for **Khan Group of Companies** (Premier Real Estate Developers, Commercial High-Rise Towers & Heavy Civil Infrastructure).

---

## 🏛️ Key Features & Modules

1. **Executive Corporate Identity & Header**
   - Architectural Monogram logo with gold/navy luxury design tokens.
   - Dual theme support (Corporate Dark Mode & Crisp Executive Light Mode).
   - Global ticker with PEC Grade Category CA accreditation, corporate hotline, and regional office locations.

2. **Dynamic Project Spotlight Hero Section**
   - High-impact animated headline with key metrics ticker (28+ Years of Excellence, 48M+ Sq.Ft Delivered, $3.4B+ Portfolio Valuation).
   - Interactive hero project carousel featuring quick architectural previews.
   - Direct CTA triggers for "Explore Iconic Projects" and "Estimate Construction Cost".

3. **Executive Leadership & Engineering Heritage**
   - Chairman Malik Tariq Khan's vision and executive address.
   - 4 Core Engineering Pillars: Structural Integrity, Sustainable Urbanism, 4D BIM Modeling, and High-Yield Capital Growth.
   - Interactive chronological milestones timeline (1998 to 2025+).
   - Executive Board of Directors directory with credentials and bios.

4. **Specialized Subsidiaries & Divisions**
   - **Khan Real Estate Developers**: Master-planned communities & smart townships.
   - **Khan Commercial & High-Rise Towers**: Grade-A skyscrapers & luxury retail centers.
   - **Khan Heavy Civil & Mega Infrastructure**: Expressways, flyovers & bridges.
   - **Khan Structural & BIM Engineering**: Seismic Zone 4 dampening & 4D digital twin simulation.
   - **Khan Asset & Smart Facility Management**: Turnkey IoT operations and concierge.

5. **Iconic Projects Showcase (Interactive Filterable Portfolio with Modal Dossier)**
   - Filter by asset categories: Commercial High-Rise, Luxury Residential, Smart Township, Mega Infrastructure.
   - Filter by project status: Completed, Under Construction, Upcoming Masterplans.
   - Search bar by keyword, city, or tower name.
   - **Architectural Blueprint & Dossier Modal**:
     * Multi-image gallery tabs (exterior, interior, blueprints).
     * Live execution progress bars for ongoing developments.
     * Full structural specs (Valuation, Covered Footprint, Lead Architect, Target Year).
     * Instant PDF Dossier download simulation.
     * Direct VIP Site Tour booking action.

6. **Interactive Construction Cost & Investment Estimator**
   - Asset class selector (Villa, High-Rise, Township, Industrial).
   - Material & finishing quality multiplier (Standard, Signature Luxury, Bespoke LEED Gold).
   - Covered area dynamic slider (2,500 Sq.Ft to 250,000 Sq.Ft).
   - Smart building add-on toggles (IoT automation, solar microgrid, VRF HVAC, seismic dampers, luxury facade).
   - Real-time calculation of estimated cost in PKR & USD, delivery timeline in months, and projected annual ROI.
   - One-click transfer into formal Bill of Quantities (BOQ) inquiry form.

7. **The Engineering Edge**
   - 4D BIM modeling, self-owned fleet of 350+ heavy machinery assets (Liebherr cranes, CAT excavators), in-house ASTM quality testing laboratories, and zero-lost-time injury protocols.

8. **Investor Relations & ESG Stewardship**
   - Institutional trust, Big-4 audit compliance, historical 24.6% capital growth yields.
   - Khan Foundation CSR initiatives (18 clean RO drinking water plants, 1.2M trees planted, 3,500+ vocational scholarships).

9. **Client Testimonials & Banking Consortium**
   - Verified investor reviews with 5-star ratings.
   - Institutional alliances: Habib Bank Limited, Meezan Bank, NESPAK, Standard Chartered, Zaha Associates UK.

10. **Confidential Consultation & Regional Offices**
    - Secure inquiry form with NDA assurance and backend CRM ticket generation.
    - Principal headquarters (Islamabad Blue Area), Lahore, Karachi, and Dubai Regional Desk contacts.

11. **Executive CRM & Lead Management Portal (Backend Powered)**
    - Secure master login for corporate executives (`khan2026`).
    - Live CRM dashboard showing real-time inquiries, lead statuses (`New`, `In Progress`, `Contacted`, `Closed`).
    - Filter and update inquiry status directly in the database.
    - View all cost estimation quotes and pipeline valuations.
    - 1-Click CSV Leads Export for corporate sales and CRM synchronization.

---

## 💻 Tech Stack

### Frontend:
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS with custom Corporate Elite Navy (`#09152b`) & Architectural Gold (`#d4af37`) palettes
- **Animations & Micro-Interactions**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & Cinzel (Executive Serif)

### Backend:
- **Runtime**: Node.js & Express.js REST API Server (`http://localhost:5000/api`)
- **Database**: Persistent JSON Storage Engine with atomic transactions
- **Endpoints**:
  * `GET /api/health` — System status and server uptime
  * `GET /api/stats` — High-level CRM pipeline statistics
  * `POST /api/inquiries` & `GET /api/inquiries` — Lead capture & listing
  * `PATCH /api/inquiries/:id/status` — Real-time lead lifecycle management
  * `POST /api/estimates` & `GET /api/estimates` — Construction quote tracking
  * `POST /api/newsletter` & `GET /api/newsletter` — Investor dispatch subscribers
  * `POST /api/admin/login` — Corporate authentication

---

## 🚀 Running the Project Locally

```bash
# Start both Backend (Port 5000) & Frontend (Port 3000/3001) concurrently:
npm run dev

# Start only the Backend Server:
npm run server

# Start only the Frontend Client:
npm run client

# Build for production:
npm run build
```

