import React from "react";
import { Card } from "react-bootstrap";

const CardCasses = ({ dateClass, detailsClass, nameClass, timeClass }) => {
  return (
    <div>
      <Card className="mb-4 cardStyle">
        <Card.Body>
          <Card.Title className="titleStyle">{nameClass}</Card.Title>
          <Card.Text className="textStyle">
            <strong>Dia:</strong> {dateClass}
            <br />
            <strong>Detalle de la clase:</strong> {detailsClass}
            <br />
            <strong>Horario:</strong> {timeClass}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCasses;
