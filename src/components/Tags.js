import '../css/Tags.css';
import TopPageTitle from '../components/TopPageTitle';

function Tags() {
    const tags = [
        {tag_title: '#javascript', url: 'tags/js'},
        {tag_title: '#css', url: 'tags/css'},
        {tag_title: '#html5', url: 'tags/html5'},
        {tag_title: '#github', url: 'tags/github'},
        {tag_title: '#pc', url: 'tags/pc'},

    ];
    var allTags = tags.map(function (tag, index) {
        return (
            <div>
                <a href={tags.url}><span className='tag'>{tag.tag_title}</span></a>
            </div>
        )
    });
    return (
        <div>
            <TopPageTitle pageTitle='Tags'/>
            <div className='all-tags gap-4'>
                {allTags}
            </div>
        </div>
    );
}
export default Tags;
