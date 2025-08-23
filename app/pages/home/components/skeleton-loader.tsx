import SkeletonCard from "./ui/skeleton-card";

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-3 gap-3 mx-6">
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
    </div>
  )
};

export default SkeletonLoader;
