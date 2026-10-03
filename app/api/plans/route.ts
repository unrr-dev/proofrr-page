import { NextResponse } from "next/server";

export type ApiPlan = {
  id: number;
  name: string;
  maxStorageBytes: number;
  maxUsers: number;
  maxProjects: number;
  maxBriefs: number;
  maxDocuments: number;
};

export async function GET() {
  try {
    const res = await fetch("https://api.proofrr.com/api/plans", {
      cache: "no-store",
      headers: {
        "Accept": "application/json",
      },
    });

    if (!res.ok) {
      console.error(`Backend API /api/plans returned ${res.status}`);
      return NextResponse.json(
        { error: `Backend returned ${res.status}` },
        { status: res.status }
      );
    }

    const data: ApiPlan[] = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to proxy /api/plans request:", error);
    return NextResponse.json(
      { error: "Internal Server Error fetching plans" },
      { status: 500 }
    );
  }
}
