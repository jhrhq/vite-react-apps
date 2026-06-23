import { Star } from "lucide-react";
import { Card, Col } from "react-bootstrap";
const ReviewCard = () => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Michel Stu</Card.Title>
          <Card.Text>
            Added
            <Star className="bg-orange-300" />
            <Star className="bg-orange-300" />
            review from his user experience
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ReviewCard;
