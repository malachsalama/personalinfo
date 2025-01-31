# Public API 

This is a simple public API that returns the following information in JSON format:

- Registered email address.
- Current datetime in ISO 8601 format.
- GitHub URL of the project's codebase.

---

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) 
- [Git](https://git-scm.com/)

### Running the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/malachsalama/personalinfo.git
   cd personalinfo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node index.js
   ```
4. Access the API at `http://localhost:3000`

---

## API Documentation

### Endpoint

- **URL:** `https://personalinfo-sigma.vercel.app/`
- **Method:** `GET`

### Response Format

```json
{
"email": "malach.salama@gmail.com",
"current_datetime": "2025-01-31T19:30:14.144Z",
"github_url": "https://github.com/malachsalama/personalinfo"
}
```

### Example Usage

Visit `https://personalinfo-sigma.vercel.app/`

## Related Links
- [Interested in Node.js developers? Visit HNG](https://hng.tech/hire/nodejs-developers)

