'use client'

import { useState, useEffect } from 'react'
import OverviewStats from '../components/OverviewStats'
import SkillScoreChart from '../components/SkillScoreChart'
import AttentionPerformanceChart from '../components/AttentionPerformanceChart'
import StudentRadarChart from '../components/StudentRadarChart'
import StudentTable from '../components/StudentTable'
import InsightsSection from '../components/InsightsSection'
import { Student } from '../types/student'

export default function Dashboard() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('/api/students')
        const data = await response.json()
        setStudents(data)
      } catch (error) {
        console.error('Error fetching students:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStudents()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Cognitive Skills & Student Performance Dashboard
              </h1>
              <p className="mt-2 text-gray-600">
                Analyze student cognitive skills and performance metrics
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Statistics */}
        <OverviewStats students={students} />

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <SkillScoreChart students={students} />
          <AttentionPerformanceChart students={students} />
        </div>

        {/* Student Radar Chart */}
        <div className="mt-8">
          <StudentRadarChart students={students} />
        </div>

        {/* Student Table */}
        <div className="mt-8">
          <StudentTable students={students} />
        </div>

        {/* Insights Section */}
        <div className="mt-8">
          <InsightsSection students={students} />
        </div>
      </main>
    </div>
  )
}
