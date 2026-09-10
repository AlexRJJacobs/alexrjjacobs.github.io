import classNames from 'classnames';
import {FC, memo, useState} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillTabs: FC<{skillGroups: SkillGroupType[]}> = memo(({skillGroups}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = skillGroups[activeIndex];

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-wrap gap-2">
        {skillGroups.map((group, index) => (
          <button
            className={classNames(
              'rounded-full border px-3 py-1 text-sm font-medium transition-colors duration-200',
              index === activeIndex
                ? 'border-indigo-400 bg-indigo-400 text-white'
                : 'border-neutral-300 bg-white text-neutral-700 hover:border-indigo-400 hover:text-indigo-700',
            )}
            key={group.name}
            onClick={() => setActiveIndex(index)}>
            {group.name}
          </button>
        ))}
      </div>

      <div className="grid min-h-[16rem] grid-cols-1 items-start gap-5 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:grid-cols-2">
        {activeGroup.skills.map(skill => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillTabs.displayName = 'SkillTabs';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, evidence} = skill;

  return (
    <div className="flex flex-col gap-y-1 border-l-2 border-indigo-400 pl-3">
      <span className="text-sm font-bold">{name}</span>
      <ul className="flex list-disc flex-col gap-y-1 pl-4 text-sm text-neutral-600">
        {evidence.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

Skill.displayName = 'Skill';
