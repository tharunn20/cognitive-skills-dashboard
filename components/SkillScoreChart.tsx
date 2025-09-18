'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Student } from '../types/student'

interface SkillScoreChartProps {
  students: Student[]
}

export default function SkillScoreChart({ students }: SkillScoreChartProps) {
  // Calculate average scores for each skill
  const skillData = [
    {
      skill: 'Comprehension',
      averageScore: students.reduce((sum, student) => sum + student.comprehension, 0) / students.length
    },
    {
      skill: 'Attention',
      averageScore: students.reduce((sum, student) => sum + student.attention, 0) / students.length
    },
    {
      skill: 'Focus',
      averageScore: students.reduce((sum, student) => sum + student.focus, 0) / students.length
    },
    {
      skill: 'Retention',
      averageScore: students.reduce((sum, student) => sum + student.retention, 0) / students.length
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Skills vs Performance</h3>
      <div style={{ height: '20rem' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={skillData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="skill" />
            <YAxis domain={[0, 100]} />
            <Tooltip 
              formatter={(value: number) => [value.toFixed(1), 'Average Score']}
              labelStyle={{ color: '#374151' }}
            />
            <Bar dataKey="averageScore" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
