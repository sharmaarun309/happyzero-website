export const capaThatSticks = {
  slug: 'capa-that-sticks',
  title: 'From audit findings to lasting fixes',
  description:
    'Why the same findings keep coming back, and a simple loop for corrective action that actually holds.',
  author: 'HappyZero',
  date: 'September 2026',
  readingTime: '4 min read',
  blocks: [
    {
      type: 'paragraph',
      text: 'Most quality teams can name the finding that comes back. It was raised last year, closed with an action, and raised again at the next audit against a slightly different clause. The paperwork is complete. The wording changes. The problem does not.',
    },
    {
      type: 'paragraph',
      text: 'Repeat findings are rarely a sign that people are careless. They are a sign that the corrective action process is being used to close a record rather than to change a process.',
    },
    {
      type: 'heading',
      text: 'Why findings repeat',
    },
    {
      type: 'paragraph',
      text: 'Four causes cover most of it.',
    },
    {
      type: 'list',
      items: [
        {
          term: 'The symptom gets fixed',
          text: 'The missing record is filled in, the part is reworked, the form is updated. The condition that let it happen is untouched.',
        },
        {
          term: 'Root cause is thin',
          text: 'The analysis stops at human error or lack of awareness. Both are places where thinking stopped, not causes you can act on.',
        },
        {
          term: 'Nobody checks the fix worked',
          text: 'The action is marked complete on the day it is done. Whether it changed anything is never tested.',
        },
        {
          term: 'Owners are overloaded',
          text: 'Actions land on the same few people who are already running quality and production. The work gets closed fast because there is no room to do it slowly.',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'None of these are solved by a better form. They are solved by treating corrective action as a short, disciplined loop that has a defined end.',
    },
    {
      type: 'heading',
      text: 'A loop that holds',
    },
    {
      type: 'paragraph',
      text: 'Contain first. Before anything else, stop the effect from reaching the customer or the next process. Quarantine the stock, add the temporary check, brief the shift. Containment is not the fix and should never be recorded as one, but it buys the time to do the rest properly.',
    },
    {
      type: 'paragraph',
      text: 'Then find the root cause. Use a method that forces the question past the first answer. Five Why is enough for most single-line problems, as long as each why is supported by evidence rather than opinion. A fishbone helps when several conditions combine and you need to see the candidates side by side. An 8D is worth the effort for problems that are expensive, customer-facing or already repeating.',
    },
    {
      type: 'paragraph',
      text: 'The test of a root cause is simple: if you removed it, could this finding still happen? If the answer is yes, keep going.',
    },
    {
      type: 'paragraph',
      text: 'Correct next, and be specific. An action with a named owner, a defined change and a date is an action. An intention to raise awareness is not. If the corrective action cannot be described as a change to a process, a document, a setting or a skill, it is probably still a symptom fix.',
    },
    {
      type: 'callout',
      text: 'If you removed the root cause, could the finding still happen? If yes, you have not found it yet.',
    },
    {
      type: 'paragraph',
      text: 'Then verify effectiveness. This is the step that decides whether the finding comes back. ISO 9001 clause 10.2 expects you to review the effectiveness of corrective action taken, which means going back after the change has had time to run and checking the result against the evidence that raised the finding in the first place. Set that review date when you set the action, and decide upfront what evidence would prove it worked.',
    },
    {
      type: 'paragraph',
      text: 'Finally, prevent recurrence beyond the one line or one product. A cause that was live in one place is usually live somewhere else. Update the FMEA so the failure mode and its new control are recorded. Update the control plan so the check is part of the standard work rather than a temporary measure. Update the training and the competence record so the next person into the role learns the corrected process, not the old one.',
    },
    {
      type: 'paragraph',
      text: 'That last step is where most loops quietly break. The fix holds while the people who made it are still there, and fades when they move on.',
    },
    {
      type: 'heading',
      text: 'Where skills and a connected system help',
    },
    {
      type: 'paragraph',
      text: 'Root cause analysis is a skill, not a template. People who have been shown how to run a Five Why with evidence, or how to build a fishbone that separates cause from symptom, produce noticeably different results from people who have only been handed the form. Building that skill in the people who own findings is usually the highest-return training a quality team can run.',
    },
    {
      type: 'paragraph',
      text: 'The system matters too. When findings, actions, documents, training records and audit history live in separate files, nobody can see that this finding has been raised before, or that the control plan was never updated, or that the review date passed unnoticed. A connected quality system does not find the root cause for you. It makes the repeat visible, keeps the verification date in front of an owner, and links the corrective action to the documents and records it should have changed.',
    },
    {
      type: 'heading',
      text: 'The point of closing a finding',
    },
    {
      type: 'paragraph',
      text: 'A finding is closed when the cause is gone and you have checked, not when the record is complete. That is a slower way to work in the first month and a much faster one by the end of the year, because the findings you close stay closed.',
    },
  ],
  endCard: {
    title: 'Where to go next',
    links: [
      {
        name: 'QMS & Internal Audit Outsourcing',
        description: 'Experienced auditors to plan, conduct and report your internal and supplier audits.',
        to: '/services/audit-outsourcing',
      },
      {
        name: 'Digital QMS',
        description: 'A modern quality management system built for manufacturing.',
        to: '/digital-qms',
      },
    ],
  },
}

export default capaThatSticks
