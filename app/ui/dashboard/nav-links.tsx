import {
  TrophyIcon,
  RocketLaunchIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Exercises', href: '/exercises', icon: RocketLaunchIcon },
  {
    name: 'Routine',
    href: '/Routine',
    icon: TrophyIcon,
  },
  { name: 'progress', href: '/progress', icon: PresentationChartLineIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
