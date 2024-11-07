import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RateComponent() {
  const [rating, setRating] = React.useState<number | null>(2.5); // Estado para armazenar o valor da avaliação

  const handleRatingChange = (event: React.SyntheticEvent, newValue: number | null) => {
    setRating(newValue); // Atualiza o estado com o valor da avaliação
  };

  return (
    <Stack spacing={1} direction="row" alignItems="center" className="w-full">
    <div className="w-1/2">
      <Rating
        name="half-rating"
        value={rating}
        precision={0.5}
        onChange={handleRatingChange}
      />
      <p>Sua avaliação: {rating}</p>
    </div>
  
    <div className="w-1/2">
      <Rating
        name="half-rating-read"
        value={rating}
        precision={0.5}
        readOnly
      />
      <p>Média de avaliação: {rating}</p>
    </div>
  </Stack>
  );
}

