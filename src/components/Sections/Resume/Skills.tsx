import classNames from 'classnames';
import {FC, memo, useCallback, useState} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

const panelId = 'skills-panel';
const tabId = (index: number) => `skills-tab-${index}`;

export const SkillTabs: FC<{skillGroups: SkillGroupType[]}> = memo(({skillGroups}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = skillGroups[activeIndex];

  return (
    <div className="flex flex-col gap-y-4">
      <div aria-label="Skill groups" className="flex flex-wrap gap-2" role="tablist">
        {skillGroups.map((group, index) => (
          <SkillTab
            active={index === activeIndex}
            index={index}
            key={group.name}
            name={group.name}
            onSelect={setActiveIndex}
          />
        ))}
      </div>

      <div
        aria-labelledby={tabId(activeIndex)}
        className="grid min-h-[16rem] grid-cols-1 items-start gap-5 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:grid-cols-2"
        id={panelId}
        role="tabpanel">
        {activeGroup.skills.map(skill => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillTabs.displayName = 'SkillTabs';

const SkillTab: FC<{name: string; index: number; active: boolean; onSelect: (index: number) => void}> = memo(
  ({name, index, active, onSelect}) => {
    const handleClick = useCallback(() => onSelect(index), [index, onSelect]);
    return (
      <button
        aria-controls={panelId}
        aria-selected={active}
        className={classNames(
          'rounded-full border px-3 py-1 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2',
          active
            ? 'border-indigo-600 bg-indigo-600 text-white'
            : 'border-neutral-300 bg-white text-neutral-700 hover:border-indigo-500 hover:text-indigo-700',
        )}
        id={tabId(index)}
        onClick={handleClick}
        role="tab"
        type="button">
        {name}
      </button>
    );
  },
);

SkillTab.displayName = 'SkillTab';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, evidence} = skill;

  return (
    <div className="flex flex-col gap-y-1 border-l-2 border-indigo-500 pl-3">
      <h3 className="text-sm font-bold text-neutral-900">{name}</h3>
      <ul className="flex list-disc flex-col gap-y-1 pl-4 text-sm text-neutral-600">
        {evidence.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

Skill.displayName = 'Skill';
