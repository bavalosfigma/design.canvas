import designTeamCover from '../assets/designteam.png'
import zachCover from '../assets/zach.png'
import zachVideo from '../assets/zach.mov'
import galleryCenter from '../assets/gallery/center.jpg'
import galleryLeft from '../assets/gallery/left.png'
import galleryRight from '../assets/gallery/right.png'
import galleryTopCenter from '../assets/gallery/top-center.png'
import galleryBottomLeft from '../assets/gallery/bottom-left.png'
import galleryLeftTall from '../assets/gallery/left-tall.png'
import galleryBottomRight from '../assets/gallery/bottom-right.png'
import galleryBrand from '../assets/gallery/brand.png'
import galleryTopRight from '../assets/gallery/top-right.png'
import newsSeamless from '../assets/news/seamless.png'
import newsColor from '../assets/news/color.png'
import newsType from '../assets/news/type.png'
import newsFeedback from '../assets/news/feedback.png'
import newsSystems from '../assets/news/systems.png'
import newsBalance from '../assets/news/balance.png'

const workInProgress =
  'Work in progress means we design in public: revise, replace, rethink. Version numbers go up, egos go down, the idea gets sharper. Comments stay on, strikethrough beats delete. Nothing is final, everything is learning.'

export const filters = ['Everything', 'Talks', 'Projects', 'Culture', 'History', 'Announcements']

/** Shared Figma / Design marks (canvas world position + stable layout ids). */
export const brandWordmarks = [
  { layoutId: 'brand-figma', text: 'Figma.', canvas: { x: 471, y: 360 } },
  { layoutId: 'brand-design', text: 'Design', canvas: { x: 892, y: 557 } },
]

export const canvasItems = [
  { id: 'mission', type: 'mission', x: 316, y: -138, w: 314, h: 314 },
  {
    id: 'config',
    type: 'config',
    x: -31,
    y: 294,
    w: 272,
    h: 403,
  },
  {
    id: 'design-team',
    type: 'team',
    x: 397,
    y: 652,
    w: 351,
    h: 215,
    label: 'Design team',
  },
  {
    id: 'source-material',
    type: 'source',
    x: 792,
    y: 72,
    w: 376,
    h: 211,
    label: 'Source Material',
  },
  {
    id: 'history',
    type: 'history',
    x: 1350,
    y: 63,
    w: 392,
    h: 346,
    label: 'History of Figma',
  },
  { id: 'roles', type: 'roles', x: 1429, y: 744, w: 278, h: 278 },
]

const canvasCardMeta = {
  mission: {
    title: 'Mission',
    blurb: 'What the design org optimizes for, and how we measure success. The work stays public: revise, replace, rethink.',
    color: '#f2ef4a',
    modal: 'mission',
  },
  config: {
    title: 'Config',
    blurb: 'Defaults, tokens, and guardrails that keep work consistent across teams, so the product feels like one system.',
    color: '#d4d4d4',
  },
  'design-team': {
    title: 'Design team',
    blurb: 'People, rituals, and how we partner with product and engineering. The team works in the open, with comments on and nothing treated as final.',
    image: designTeamCover,
    modal: 'lightbox',
    slides: [{ image: galleryCenter }, { image: galleryRight }, { image: galleryLeft }],
  },
  'source-material': {
    title: 'Source Material',
    blurb: 'References, shelves, and the work we keep close while designing in public.',
    image: zachCover,
    video: zachVideo,
    color: '#4d49fc',
    modal: 'video',
  },
  history: {
    title: 'History of Figma',
    blurb: 'Milestones and context that shaped how we work today, from the first files to the way the team ships now.',
    color: '#e4ff97',
    modal: 'timeline',
  },
  roles: {
    title: 'Open roles',
    blurb: 'What we are hiring for, and how to reach the team. The studio looks for people who want to design in public.',
    color: '#6e2a22',
  },
}

export function getCanvasCardMeta(item) {
  return (
    canvasCardMeta[item.id] ?? {
      title: item.label ?? 'Card',
      blurb: 'Add notes or links for this canvas item.',
    }
  )
}

export const galleryItems = [
  {
    id: 'left-tall',
    x: 0,
    y: 234,
    w: 282,
    h: 283,
    label: 'Spring campaign open in Figma',
    image: galleryLeftTall,
    imageStyle: { left: '0', top: '-2.97%', width: '100%', height: '103.37%' },
  },
  {
    id: 'top-center',
    x: 693,
    y: -19,
    w: 282,
    h: 318,
    label: 'Hello Kitty mural',
    image: galleryTopCenter,
    imageStyle: { left: '0', top: '-11.38%', width: '100%', height: '111.74%' },
  },
  {
    id: 'bottom-left',
    x: 103,
    y: 980,
    w: 282,
    h: 116,
    label: 'Colorful plush toys',
    image: galleryBottomLeft,
    imageStyle: { left: '0', top: '-2.78%', width: '100%', height: '104.71%' },
  },
  {
    id: 'top-right',
    x: 1546,
    y: 101,
    w: 444,
    h: 316,
    label: 'Neon shapes on black',
    image: galleryTopRight,
    imageStyle: { inset: '0', width: '100%', height: '100%', objectFit: 'cover' },
  },
  {
    id: 'brand',
    x: 693,
    y: 499,
    w: 444,
    h: 277,
    label: 'Figma posters on a wall',
    image: galleryBrand,
    imageStyle: { left: '-3.37%', top: '0', width: '106.74%', height: '114.08%' },
  },
  {
    id: 'bottom-right',
    x: 1273,
    y: 809,
    w: 444,
    h: 316,
    label: 'Color study at 400%',
    image: galleryBottomRight,
    imageStyle: { inset: '0', width: '100%', height: '100%', objectFit: 'cover' },
  },
]

export const boardCards = [
  {
    id: 'seamless',
    title: 'Seamless',
    category: 'Projects',
    date: 'March 15, 2026',
    text: 'Exploring the art of seamless design integration within our projects, focusing on creating intuitive user experiences that resonate with our audience.',
    image: 475,
    photo: newsSeamless,
  },
  {
    id: 'responsive',
    title: 'Responsive',
    category: 'Projects',
    date: 'March 15, 2026',
    text: 'Diving into the nuances of responsive layouts and how they enhance accessibility and engagement across diverse devices and platforms.',
    image: 304,
  },
  {
    id: 'wip-1',
    title: 'Work in progress',
    category: 'Announcements',
    date: 'March 15, 2026',
    text: workInProgress,
    image: 304,
  },
  {
    id: 'wip-2',
    title: 'Work in progress',
    category: 'History',
    date: 'March 15, 2026',
    text: workInProgress,
    image: 324,
  },
  {
    id: 'color',
    title: 'Color',
    category: 'Culture',
    date: 'March 15, 2026',
    text: 'Understanding color theory fundamentals and applying them to evoke the right emotions and guide user actions effectively.',
    image: 304,
    photo: newsColor,
  },
  {
    id: 'type',
    title: 'Typography',
    category: 'Culture',
    date: 'March 15, 2026',
    text: 'A deep dive into typography choices and their impact on readability and brand personality in our digital interfaces.',
    image: 475,
    photo: newsType,
  },
  {
    id: 'wip-3',
    title: 'Work in progress',
    category: 'Announcements',
    date: 'March 15, 2026',
    text: workInProgress,
    image: 304,
  },
  {
    id: 'wip-4',
    title: 'Work in progress',
    category: 'History',
    date: 'March 15, 2026',
    text: workInProgress,
    image: 324,
  },
  {
    id: 'feedback',
    title: 'Feedback',
    category: 'Talks',
    date: 'March 15, 2026',
    text: 'The importance of user feedback loops in refining design elements to better meet user needs and expectations.',
    image: 475,
    photo: newsFeedback,
  },
  {
    id: 'motion',
    title: 'Motion',
    category: 'Talks',
    date: 'March 15, 2026',
    text: 'Exploring the role of animation and micro-interactions in enhancing user engagement without overwhelming the experience.',
    image: 304,
  },
  {
    id: 'wip-5',
    title: 'Work in progress',
    category: 'Announcements',
    date: 'March 15, 2026',
    text: workInProgress,
    image: 304,
  },
  {
    id: 'wip-6',
    title: 'Work in progress',
    category: 'History',
    date: 'March 15, 2026',
    text: workInProgress,
    image: 324,
  },
  {
    id: 'systems',
    title: 'Systems',
    category: 'Culture',
    date: 'March 15, 2026',
    text: 'Strategies for maintaining consistency across design systems to ensure a cohesive brand experience throughout all touchpoints.',
    image: 304,
    photo: newsSystems,
  },
  {
    id: 'balance',
    title: 'Balance',
    category: 'Projects',
    date: 'March 15, 2026',
    text: 'Balancing creativity and functionality: how to innovate in design while keeping usability at the forefront of our projects.',
    image: 475,
    photo: newsBalance,
  },
  {
    id: 'wip-7',
    title: 'Work in progress',
    category: 'Announcements',
    date: 'March 15, 2026',
    text: workInProgress,
    image: 304,
  },
  {
    id: 'wip-8',
    title: 'Work in progress',
    category: 'History',
    date: 'March 15, 2026',
    text: workInProgress,
    image: 324,
  },
]

const BOARD_COLUMN_COUNT = 4

export function columnsFor(filter) {
  const columns = Array.from({ length: BOARD_COLUMN_COUNT }, () => [])
  const visible = boardCards.filter(
    (card) => filter === 'Everything' || card.category === filter,
  )

  // The full board is authored as groups of four, one column at a time.
  // A filter lays the matches out again from the first column, left to right.
  visible.forEach((card, index) => {
    const column =
      filter === 'Everything' ? Math.floor(index / BOARD_COLUMN_COUNT) : index % BOARD_COLUMN_COUNT
    columns[column].push(card)
  })

  return columns
}
