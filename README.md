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
