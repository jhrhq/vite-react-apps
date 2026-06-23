import course from './coursedata';
import course2 from './courseData2';

const fakeCourse = [...course, ...course2];
const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
shuffle(fakeCourse);

export default fakeCourse;