

# This project has been cancelled. 





# 💰 ClarityLedger

**ClarityLedger** is a full-stack **Smart Budgeting & Expense Forecasting** application designed to help individuals seamlessly manage, track, and forecast their financial transactions. It leverages modern tech stacks across frontend, backend, DevOps, and cloud — making it a real-world, scalable finance tracking system.

---

## 🚀 Tech Stack

| Layer       | Technologies Used |
|-------------|-------------------|
| **Frontend** | React.js, TypeScript, Next.js 15, Tailwind CSS |
| **Backend**  | Java Spring Boot, PostgreSQL |
| **DevOps & CI/CD** | Jenkins, Ansible, Docker, GitHub Actions |
| **Infrastructure as Code** | Terraform |
| **Cloud Deployment** | AWS (EC2, RDS, S3, IAM) / GCP (alternative support) |
| **Monitoring** | Prometheus + Grafana (for future integrations) |

---

## 📱 Features

> A quick breakdown of what ClarityLedger brings to your (digital) wallet:

### 🔐 Authentication & Security
- JWT-based login & signup
- Role-based access controls
- Password encryption with BCrypt
- Spring Security configuration

### 💸 Transaction Management
- Add, edit, delete, and filter expenses/income
- Monthly/yearly transaction summaries
- Categorize transactions (custom & predefined)
- Fully tested APIs with Postman
- Enum-based transaction types (INCOME / EXPENSE)

### 📊 Budget Management
- Set monthly/weekly budgets by category
- Track budget usage and balance in real time
- Budget summary APIs (% spent, amount left)

### 🧠 Expense Forecasting (Mini AI Feature)
- Predict next month’s expense using moving averages
- Takes into account last X months of user transactions
- Basic statistical logic, easily extensible

### 📦 Category Management
- Predefined categories
- Support for adding user-defined custom categories

### 📈 Dashboard & Reporting
- Unified dashboard with:
  - Total income vs expense
  - Category-wise analytics
  - Predicted next month's expenses
  - Budget vs actual spend comparison

---

## 📁 Project Structure (Backend)

```
clarityledger/
│
├── backend/
│   ├── config/               # Spring Security & JWT config
│   ├── auth/                 # Signup, Login, Auth filters
│   ├── user/                 # User entity & repo
│   ├── transaction/          # Transaction logic & APIs
│   ├── budget/               # Budget models & APIs
│   ├── forecast/             # Forecast service & response DTOs
│   ├── dashboard/            # DashboardService
│   └── ... (DTOs, Enums)
│
└── frontend/
    ├── app/                  # Next.js app with pages & routes
    ├── components/           # Reusable UI elements
    ├── sections/             # Hero, Summary, Analytics, etc.
    └── utils/                # API helpers, constants
```

---

## 🧪 Testing

- ✅ Backend: Tested all endpoints via **Postman**, includes authentication token flows
- ✅ Validation: Bean-level validations using `@NotNull`, enums, and more
- ✅ Frontend: Manually tested across different filters, states, and dashboard views

---

## ⚙️ DevOps Setup (Brief Overview)

- CI/CD with Jenkins + GitHub Actions
- Provisioning with Terraform
- App hosted on AWS (Spring Boot backend on EC2, DB on RDS)
- Monitoring with Prometheus and Grafana (planned)

---

## 🧠 Future Enhancements

- Machine learning-based forecasting (instead of static averages)
- Multi-user budgets with sharing capabilities
- Expense breakdown visualizations via charts (Recharts / D3.js)
- Admin panel for category management
- Export data (CSV, PDF reports)
- Progressive Web App (PWA) support

---

## 🧑‍💻 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/<your-username>/clarityledger.git

# Setup backend
cd backend
./mvnw spring-boot:run

# Setup frontend
cd frontend
npm install
npm run dev
```

---

## 📌 Deployment Ready

This project is **cloud-ready and production-friendly** — designed with scalability in mind. Easily configurable for AWS, GCP, or even on-prem deployments.

---

## 👨‍💻 Author

Made with 💙 by [Mithu](https://github.com/yourusername)

> _"Finance is hard. Tracking it shouldn’t be."_ — ClarityLedger

---

## 📄 License

MIT License — feel free to use and extend this project.
