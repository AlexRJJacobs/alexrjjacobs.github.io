import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';
import FigureItem from '../../Media/FigureItem';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {id, title, date, location, note, content, figures} = item;
  return (
    <div className="relative flex scroll-mt-20 flex-col pb-8 pl-6 text-left last:pb-0" id={id}>
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-neutral-300" />
      <span
        aria-hidden="true"
        className="absolute -left-[5px] top-5 h-[11px] w-[11px] rounded-full border-2 border-indigo-500 bg-neutral-100"
      />
      <article className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-bold leading-snug text-neutral-900">{title}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
            {location}
          </span>
          <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600">{date}</span>
          {note && <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600">{note}</span>}
        </div>
        <div className="mt-4 text-sm leading-relaxed text-neutral-700">{content}</div>
        {figures && figures.length > 0 && (
          <div className="mt-5 grid grid-cols-1 gap-4 border-t border-neutral-200 pt-5 sm:grid-cols-2">
            {figures.map(figure => (
              <FigureItem figure={figure} key={figure.caption} />
            ))}
          </div>
        )}
      </article>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
