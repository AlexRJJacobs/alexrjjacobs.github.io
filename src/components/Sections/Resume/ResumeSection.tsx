import {FC, memo, PropsWithChildren} from 'react';

import {SectionId} from '../../../data/data';

const ResumeSection: FC<PropsWithChildren<{id: SectionId; title: string; subtitle?: string}>> = memo(
  ({id, title, subtitle, children}) => {
    return (
      <div
        className="grid scroll-mt-16 grid-cols-1 gap-y-4 py-10 first:pt-0 last:pb-0 md:grid-cols-4 md:gap-x-6"
        id={id}>
        <div className="col-span-1 flex flex-col items-center gap-y-3 text-center md:items-start md:text-left">
          <div className="relative h-max">
            <h2 className="text-xl font-bold uppercase text-neutral-900">{title}</h2>
            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-indigo-500" />
          </div>
          {subtitle && <p className="max-w-sm text-sm text-neutral-600">{subtitle}</p>}
        </div>
        <div className="col-span-1 flex flex-col md:col-span-3">{children}</div>
      </div>
    );
  },
);

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
