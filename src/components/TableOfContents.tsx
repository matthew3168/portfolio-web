'use client'
import React, { useEffect, useState } from 'react'

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    // Get all headings
    const headingElements = document.querySelectorAll('h2, h3');
    
    const headingData = Array.from(headingElements).map((heading) => {
      // Create id from heading text if it doesn't exist
      if (!heading.id) {
        heading.id = heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
      }
      
      return {
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName[1])
      };
    });

    setHeadings(headingData);
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return React.createElement(
    'div',
    { className: "sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto" },
    [
      React.createElement(
        'h4',
        { 
          className: "font-semibold mb-4",
          key: "toc-header"
        },
        "Table of Contents"
      ),
      React.createElement(
        'ul',
        { 
          className: "space-y-3 text-sm",
          key: "toc-list"
        },
        headings.map((heading) => 
          React.createElement(
            'li',
            {
              key: heading.id,
              style: { paddingLeft: `${(heading.level - 2) * 1}rem` }
            },
            React.createElement(
              'a',
              {
                href: `#${heading.id}`,
                className: "text-muted-foreground hover:text-primary transition-colors"
              },
              heading.text
            )
          )
        )
      )
    ]
  );
}