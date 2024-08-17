import useStore from '@/app/store';

const Layers = () => {
  const themeSections = useStore((state) => state.themeSections);
  return (
    <div className="flex flex-col gap-y-2 p-4">
      <div>Layers</div>
      <div>
        {themeSections.map((section) => (
          <div key={section.id}>{section.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Layers;
