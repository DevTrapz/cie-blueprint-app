# Document Generator 'Blueprint'

This is a **React/TypeScript** embedded application designed to generate "Blueprints"—customized documentation for students at the **Center for Intuitive Education**.

### 🛠 Tech Stack

- **Framework:** React
- **Language:** TypeScript
- **Deployment:** GitHub Pages (Automated via GitHub Actions)
- **Integration:** Iframe/Embedded

---

## 🚀 CI/CD & Deployment

The application is a publicly deployed static site utilizing **GitHub Pages** for cost-effective hosting.

- **Automation:** A CI/CD pipeline is configured via GitHub Actions to deploy updates automatically.
- **Integration:** The application is consumed as an embedded service via a URL on the primary _Center for Intuitive Education_ student platform.

---

## 🏗 Data Pipeline & Architecture

### The Embedded Design Choice

To leverage the existing student platform without the overhead of a custom backend, the application is embedded directly into the host environment. This approach was chosen to:

1.  Avoid the complexity of building a custom API.
2.  Eliminate the need for secure, cross-platform authentication for data retrieval.

### Data Transmission

Student data is populated directly into the application via **URL Query Parameters**.

> [!CAUTION]
> **Technical Debt: URI Character Limits**
> The application is currently approaching the standard browser limit for query parameters. Further expansion of the data schema poses a high risk of "414 Request-URI Too Long" errors, which would result in a total failure to render.

---

## 🛡 Security & IP Considerations

- **Public Source Code:** This repository is public to facilitate the use of free GitHub Pages hosting.
- **Proprietary Value:** The risk of Intellectual Property (IP) loss is categorized as **Low**. The application is highly specialized and requires proprietary data structures sourced exclusively from the host platform to function.
- **Data Privacy:** By using query parameters, we avoid the need for persistent database storage for student data within this specific micro-service.

---
