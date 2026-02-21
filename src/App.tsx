/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

type TabId = 'loans' | 'taxes' | 'debt' | 'income' | 'expenses';

interface TabConfig {
  id: TabId;
  label: string;
  emoji: string;
  emptyTitle: string;
  emptyDescription: string;
}

const TABS: TabConfig[] = [
  {
    id: 'loans',
    label: 'Student Loans',
    emoji: '🎓',
    emptyTitle: 'No student loans tracked yet',
    emptyDescription: 'Keep track of your educational debt, interest rates, and repayment progress in one place.',
  },
  {
    id: 'taxes',
    label: 'Taxes',
    emoji: '📋',
    emptyTitle: 'No tax records found',
    emptyDescription: 'Organize your annual filings, estimated payments, and deductions to stay ahead of tax season.',
  },
  {
    id: 'debt',
    label: 'Other Debt',
    emoji: '💳',
    emptyTitle: 'No other debt tracked yet',
    emptyDescription: 'Monitor credit cards, personal loans, or other liabilities to visualize your path to financial freedom.',
  },
  {
    id: 'income',
    label: 'Income',
    emoji: '💰',
    emptyTitle: 'No income streams added',
    emptyDescription: 'Log your salary, freelance earnings, and passive income sources to understand your total cash flow.',
  },
  {
    id: 'expenses',
    label: 'Expenses',
    emoji: '📊',
    emptyTitle: 'No expenses logged yet',
    emptyDescription: 'Track your spending habits across categories to identify opportunities for saving and optimization.',
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('loans');

  const activeTabConfig = TABS.find((t) => t.id === activeTab)!;

  const today = new Date('2026-02-21');
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-white text-[#37352F] font-['DM_Sans',_sans-serif]">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap" rel="stylesheet" />

      <div className="max-w-[960px] mx-auto px-6 pb-20">
        {/* Sticky Top Section */}
        <div className="sticky top-0 bg-white z-10 pt-12">
          {/* Header */}
          <header className="mb-12">
            <div className="text-[12px] uppercase tracking-[0.04em] text-[#9B9A97] mb-2 font-semibold">
              Personal Finance
            </div>
            <h1 className="text-[40px] font-bold font-['Source_Serif_4',_serif] leading-tight tracking-[-0.03em] mb-2">
              Moses Estate
            </h1>
            <p className="text-[#9B9A97] text-[16px]">
              A calm space for your financial organization and planning.
            </p>
          </header>

          {/* Navigation Tabs */}
          <nav className="flex border-b border-[#E8E5E0] mb-12">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center px-4 py-3 text-[14px] transition-all duration-150 ease-in-out border-b-2 cursor-pointer
                  ${activeTab === tab.id 
                    ? 'border-[#37352F] text-[#37352F] font-semibold' 
                    : 'border-transparent text-[#9B9A97] font-normal hover:text-[#37352F]'}
                `}
              >
                <span className="mr-2">{tab.emoji}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <main className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-[#F7F6F3] rounded-2xl flex items-center justify-center mb-6 border border-[#E8E5E0]">
            <span className="text-[28px]">{activeTabConfig.emoji}</span>
          </div>
          <h2 className="text-[18px] font-semibold mb-2">
            {activeTabConfig.emptyTitle}
          </h2>
          <p className="text-[#9B9A97] text-[14px] leading-[1.65] max-w-[420px] mb-8">
            {activeTabConfig.emptyDescription}
          </p>
          <div className="flex gap-3">
            <button className="bg-[#37352F] text-white px-4 py-2 rounded-md text-[14px] font-medium hover:bg-[#2c2a25] transition-colors duration-150 cursor-pointer">
              ＋ New entry
            </button>
            <button className="border border-[#E8E5E0] text-[#37352F] px-4 py-2 rounded-md text-[14px] font-medium hover:bg-[#F7F6F3] transition-colors duration-150 cursor-pointer">
              Import
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-24 pt-6 border-t border-[#E8E5E0] flex justify-between items-center text-[12px] text-[#9B9A97]">
          <div className="flex items-center gap-2">
            <div className="w-[6px] h-[6px] rounded-full bg-[#D3F9D8] border border-[#69DB7C]"></div>
            <span>All data local</span>
          </div>
          <div>
            {formattedDate}
          </div>
        </footer>
      </div>
    </div>
  );
}
