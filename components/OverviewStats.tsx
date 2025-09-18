'use client'

import { Student } from '../types/student'

interface OverviewStatsProps {
  students: Student[]
}

export default function OverviewStats({ students }: OverviewStatsProps) {
  const avgScore = students.reduce((sum, student) => sum + student.assessment_score, 0) / students.length
  const avgComprehension = students.reduce((sum, student) => sum + student.comprehension, 0) / students.length
  const avgAttention = students.reduce((sum, student) => sum + student.attention, 0) / students.length
  const avgFocus = students.reduce((sum, student) => sum + student.focus, 0) / students.length
  const avgRetention = students.reduce((sum, student) => sum + student.retention, 0) / students.length
  const avgEngagement = students.reduce((sum, student) => sum + student.engagement_time, 0) / students.length

  const stats = [
    {
      name: 'Average Assessment Score',
      value: avgScore.toFixed(1),
      unit: '/100',
      color: 'bg-blue-500'
    },
    {
      name: 'Average Comprehension',
      value: avgComprehension.toFixed(1),
      unit: '/100',
      color: 'bg-green-500'
    },
    {
      name: 'Average Attention',
      value: avgAttention.toFixed(1),
      unit: '/100',
      color: 'bg-yellow-500'
    },
    {
      name: 'Average Focus',
      value: avgFocus.toFixed(1),
      unit: '/100',
      color: 'bg-purple-500'
    },
    {
      name: 'Average Retention',
      value: avgRetention.toFixed(1),
      unit: '/100',
      color: 'bg-red-500'
    },
    {
      name: 'Average Engagement',
      value: avgEngagement.toFixed(1),
      unit: ' min',
      color: 'bg-indigo-500'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className={`w-4 h-4 rounded-full ${stat.color}`}></div>
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              <p className="text-2xl font-bold text-gray-900">
                {stat.value}
                <span className="text-lg font-normal text-gray-500">{stat.unit}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
