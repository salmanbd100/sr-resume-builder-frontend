# SR Resume Builder

This is a web application for building and customizing professional resumes.

## Features

*   **Authentication:** Secure user authentication using NextAuth.js.
*   **Resume Builder:** An intuitive interface to create and edit resumes, with dedicated sections for:
    *   Personal Details
    *   Work Experience
    *   Education
    *   Skills
    *   Summary
*   **Live Preview:** See your resume take shape in real-time.
*   **Dashboard:** A personalized dashboard to manage your saved resumes.
*   **Responsive Design:** Build your resume on any device.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Shadcn/ui](https://ui.shadcn.com/)
*   **Authentication:** [NextAuth.js](https://next-auth.js.org/)
*   **Form Management:** [React Hook Form](https://react-hook-form.com/)
*   **Schema Validation:** [Zod](https://zod.dev/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later)
*   pnpm

### Installation

1.  **Clone the repo:**
    ```sh
    git clone https://github.com/your_username/sr-resume-builder-frontend.git
    cd sr-resume-builder-frontend
    ```

2.  **Install dependencies:**
    ```sh
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add the necessary environment variables. You can use `.env.example` as a template.

4.  **Run the development server:**
    ```sh
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

*   `dev`: Starts the development server.
*   `build`: Creates a production build.
*   `start`: Starts the production server.
*   `lint`: Lints the code using ESLint.
*   `format`: Formats the code using Prettier.

## Project Structure

```
/
├── app/                  # Main application source code (pages, layouts, etc.)
│   ├── api/              # API routes
│   ├── builder/          # Resume builder page
│   ├── dashboard/        # User dashboard
│   └── ...
├── components/           # Reusable UI components
│   ├── builder/          # Components for the resume builder
│   ├── dashboard/        # Components for the dashboard
│   └── ui/               # Generic UI components (from Shadcn/ui)
├── lib/                  # Utility functions and schemas
├── public/               # Static assets
└── ...                   # Configuration files
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
