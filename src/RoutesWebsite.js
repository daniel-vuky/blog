import HomePage from './pages/HomePage';
import PostDetailPage from './components/PostDetailPage';
import Tags from './components/Tags';
import Blp from './components/Blp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const RoutesWebsite = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/post" element={<PostDetailPage />} />
                <Route path="/tags" element={<Tags />} />
                <Route path="/category/:id" element={<Blp />} />
            </Routes>
        </Router>
    );
}
