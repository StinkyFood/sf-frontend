import { Button } from '@/components/ui/button';
import Heart from '@/assets/heart.svg';

export default function Home() {
  return (
    <Button className="gap-1">
      <Heart className="w-4 stroke-current fill-danger" />
      <span>Love button</span>
    </Button>
  );
}
