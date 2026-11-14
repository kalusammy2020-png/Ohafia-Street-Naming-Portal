export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center sm:flex sm:justify-between sm:text-left space-y-3 sm:space-y-0">
        <div>
          <p className="font-semibold text-slate-200">Ohafia Local Government Area Council</p>
          <p className="text-[11px] text-slate-500">
            Proposed Street Naming Database &amp; Verification System (Techrise 3.0)
          </p>
        </div>
        <div className="text-[11px] text-slate-500">
          <p>&copy; {new Date().getFullYear()} Techrise 3.0 Ohafia Cohort.</p>
          <p>Designed for presentation to the Executive Mayor of Ohafia LGA.</p>
        </div>
      </div>
    </footer>
  );
}