'use client'
import Link from 'next/link'
import PageWrapper from '@/components/layout/PageWrapper'
import { ArrowLeft, Github, Link as LinkIcon, Calendar, Star } from 'lucide-react'
import { useState } from 'react'

export default function ProjectPage() {
  const [selectedDay, setSelectedDay] = useState(1)
  
  // Will expand this as more days are completed
  const completedDays = [1]
  
  const solutions = {
    1: {
      title: "Historian Hysteria",
      tags: ['Python', 'Data Structures', 'Hash Maps'],
      description: "Help the North Pole's Senior Historians analyze mysterious lists to find the missing Chief Historian.",
      difficulty: "⭐ Easy",
      parts: [
        {
          title: "List Distance Calculation",
          problem: "Calculate the total 'distance' between two lists by matching smallest numbers and summing their differences.",
          approach: "Used Python's defaultdict for frequency counting and implemented a greedy matching algorithm.",
          code: `from collections import defaultdict

f = open("input.txt", "r")
left = defaultdict(int)
right = defaultdict(int)
total = 0

for row in f:
    s = row.split()
    left[int(s[0])] += 1
    right[int(s[1])] += 1

while True:
    if len(left) == 0:
        break
    else:
        left_min = min(left.keys())
        right_min = min(right.keys())
        if left[left_min] == 1:
            del left[left_min]
        else:
            right[right_min] -= 1
        if right[right_min] == 1:
            del right[right_min]
        else:
            right[right_min] -= 1
        total += abs(left_min - right_min)`,
          explanation: [
            "Used defaultdict to track frequency of numbers in both lists",
            "Implemented greedy matching of smallest numbers",
            "Maintained frequency counts with efficient deletion",
            "O(n log n) time complexity due to repeated minimum finding"
          ]
        },
        {
          title: "Similarity Score",
          problem: "Calculate a similarity score based on number frequencies in both lists.",
          approach: "Used dictionary operations to track frequencies and calculate weighted scores.",
          code: `from collections import defaultdict

f = open("input.txt", "r")
left = defaultdict(int)
right = defaultdict(int)
total = 0

for row in f:
    s = row.split()
    left[int(s[0])] += 1
    right[int(s[1])] += 1

for i in left:
    if right.get(i):
        total += left[i] * i * right.get(i)`,
          explanation: [
            "Built frequency maps for both lists",
            "Calculated weighted scores based on frequencies",
            "O(n) time complexity for input processing",
            "O(k) for final calculation where k is unique numbers"
          ]
        }
      ]
    }
    // Additional days will be added here
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <article className="max-w-5xl mx-auto px-8 py-12">
          {/* Navigation */}
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 text-gray-600 hover:text-gray-900 mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Header Section */}
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Advent of Code 2024
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A collection of daily coding challenges and their solutions
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <a 
                href="https://github.com/yourusername/aoc2024"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
                View Source
              </a>
            </div>
          </header>

          {/* Day Selection Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenge Days</h2>
            <div className="grid grid-cols-5 gap-4">
              {Array.from({length: 25}, (_, i) => i + 1).map(day => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`p-4 rounded-lg border ${
                    selectedDay === day 
                      ? 'border-blue-500 bg-blue-50' 
                      : completedDays.includes(day)
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 bg-white'
                  } hover:shadow-md transition-all duration-200`}
                  disabled={!completedDays.includes(day)}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Day {day}</span>
                  </div>
                  {completedDays.includes(day) && (
                    <div className="text-xs text-green-600 mt-2">
                      Completed ✓
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Day Content */}
          {completedDays.includes(selectedDay) && solutions[selectedDay] && (
            <div className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Day {selectedDay}: {solutions[selectedDay].title}
                </h2>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-gray-600">{solutions[selectedDay].difficulty}</span>
                  <div className="flex gap-2">
                    {solutions[selectedDay].tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">
                  {solutions[selectedDay].description}
                </p>
              </div>

              {solutions[selectedDay].parts.map((part, index) => (
                <section key={index} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Part {index + 1}: {part.title}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Problem</h4>
                      <p className="text-gray-600">{part.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Approach</h4>
                      <p className="text-gray-600">{part.approach}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Solution</h4>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <pre className="text-sm text-gray-800">
                          {part.code}
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Technical Details</h4>
                      <ul className="space-y-2">
                        {part.explanation.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-1 text-blue-500">•</span>
                            <span className="text-gray-600">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          )}

          {!completedDays.includes(selectedDay) && (
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon!</h3>
              <p className="text-gray-600">
                Solution for Day {selectedDay} will be posted after the challenge is completed.
              </p>
            </div>
          )}
        </article>
      </div>
    </PageWrapper>
  )
}