import ProjectSection from "@/components/ProjectSection"
import SearchSection from "@/components/SearchSection"

export default async function DashboardHome() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-7">
      <section className="mx-auto flex w-full max-w-full flex-col gap-7 px-12 py-6">
        <SearchSection />
        <ProjectSection />
      </section>
    </div>
  )
}
