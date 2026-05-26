export default function Loading() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center bg-[var(--color-canvas)]">
      <div className="w-8 h-8 border-[3px] border-[var(--color-border)] border-t-[var(--color-charcoal)] rounded-full animate-spin" />
    </div>
  );
}
