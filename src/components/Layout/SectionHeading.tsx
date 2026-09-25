import classNames from 'classnames';
import {FC, memo} from 'react';

// Eyebrow, title and optional lead line shared by the dark sections.
const SectionHeading: FC<{eyebrow?: string; title: string; lead?: string; centered?: boolean}> = memo(
  ({eyebrow, title, lead, centered}) => (
    <div className={classNames('flex flex-col gap-y-2', centered && 'items-center text-center')}>
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300">{eyebrow}</p>}
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      {lead && <p className="max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">{lead}</p>}
    </div>
  ),
);

SectionHeading.displayName = 'SectionHeading';
export default SectionHeading;
