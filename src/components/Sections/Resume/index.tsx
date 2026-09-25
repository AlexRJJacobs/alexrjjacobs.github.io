import {FC, memo} from 'react';

import {experience, projects, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillTabs} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection id={SectionId.Experience} title="Experience">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection
          id={SectionId.Projects}
          subtitle="The goal, the design decisions, and what happened, for each project. Select a photo to see it full size."
          title="Projects">
          {projects.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection id={SectionId.Skills} subtitle="Each skill with the work behind it." title="Skills">
          <SkillTabs skillGroups={skills} />
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
