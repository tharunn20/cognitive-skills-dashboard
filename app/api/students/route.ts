import { NextResponse } from 'next/server'
import studentsData from '@/data/synthetic_students.json'

export async function GET() {
  try {
    return NextResponse.json(studentsData)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch students data' },
      { status: 500 }
    )
  }
}
