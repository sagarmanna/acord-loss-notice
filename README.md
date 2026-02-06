:

🚗 ACORD Automobile Loss Notice (Web Version)

A fully functional web-based implementation of the ACORD 2 – Automobile Loss Notice (2016/10) form.

🔗 Live Demo:
👉 https://acord-loss-notice.vercel.app/

📌 Project Overview

This project is a responsive web application that replicates the official ACORD Automobile Loss Notice form (Pages 1–2).

It allows users to:

Fill all required form fields

Add/remove dynamic rows for Injured and Witnesses

Validate required fields

Preview submission

Export as PDF (via Print)

Maintain clean professional UI layout

✨ Features
✅ Complete ACORD Page 1–2 Coverage

Header section (Date, Carrier, NAIC, Policy #, Line of Business)

Agency details

Insured information

Contact details

Loss details

Insured vehicle information

Other vehicle/property damaged

Injured table (dynamic rows)

Witnesses / Passengers table (dynamic rows)

Remarks section

✅ Form Functionality

React Hook Form validation

Zod schema validation

Dynamic field arrays (add/remove rows)

Clean responsive layout (mobile friendly)

PDF export using Print

🛠️ Tech Stack

React (Vite)

React Hook Form

Zod

Vercel (Deployment)

🚀 Deployment

This project is deployed on Vercel with automatic GitHub integration.

Every push to main branch triggers:

Automatic build

Automatic deployment

📂 Project Structure
src/
  components/
    sections/
    ui/
  pages/
  schema/
  utils/

⚙️ Installation (Local Setup)
git clone https://github.com/YOUR_USERNAME/acord-loss-notice.git
cd acord-loss-notice
npm install
npm run dev


To build production:

npm run build
