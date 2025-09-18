'use client'

import { useState } from 'react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts'
import { Student } from '../types/student'

interface StudentRadarChartProps {
  students: Student[]
}

export default function StudentRadarChart({ students }: StudentRadarChartProps) {
  const [selectedStudent, setSelectedStudent] = useState<Student>(students[0])

  const radarData = [
    {
      subject: 'Comprehension',
      A: selectedStudent.comprehension,
      fullMark: 100
    },
    {
      subject: 'Attention',
      A: selectedStudent.attention,
      fullMark: 100
    },
    {
      subject: 'Focus',
      A: selectedStudent.focus,
      fullMark: 100
    },
    {
      subject: 'Retention',
      A: selectedStudent.retention,
      fullMark: 100
    },
    {
      subject: 'Assessment',
      A: selectedStudent.assessment_score,
      fullMark: 100
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Individual Student Profile</h3>
        <select
          value={selectedStudent.student_id}
          onChange={(e) => {
            const student = students.find(s => s.student_id === e.target.value)
            if (student) setSelectedStudent(student)
          }}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {students.map(student => (
            <option key={student.student_id} value={student.student_id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>
      
      <div style={{ height: '20rem' }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarData} margin={{ top: 20, right: 80, bottom: 20, left: 80 }}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis domain={[0, 100]} />
            <Radar
              name="Skills"
              dataKey="A"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.3}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p><strong>Student:</strong> {selectedStudent.name}</p>
        <p><strong>Class:</strong> {selectedStudent.class}</p>
        <p><strong>Engagement Time:</strong> {selectedStudent.engagement_time} minutes</p>
      </div>
    </div>
  )
}
