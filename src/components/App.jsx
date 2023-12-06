import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { AppWrapper } from './Wrapper/Wrapper.styled';
import { Suspense, lazy } from 'react';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <>
      <Header />
      <AppWrapper>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </AppWrapper>
    </>
  );
};
