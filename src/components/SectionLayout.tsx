import React, { ReactNode } from "react";

interface SectionLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ 
  title, 
  subtitle, 
  children 
}) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-24 py-12">
        <header className="mb-12 border-b pb-6 dark:border-gray-700">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          )}
        </header>
        <main>{children}</main>
        <footer className="mt-16 pt-8 border-t dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
          <p>© 2025 FlowAgents. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default SectionLayout;