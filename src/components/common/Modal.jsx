// Dark overlay with a centered box. Clicking the overlay closes it.
export default function Modal({ children, onClose, widthClass = 'max-w-lg', roundedClass = 'rounded-3xl' }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`bg-white ${roundedClass} ${widthClass} w-full overflow-hidden shadow-2xl border border-slate-100 my-8`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}