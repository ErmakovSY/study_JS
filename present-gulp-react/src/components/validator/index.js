import React from 'react';

export default function validator(value, type) {
  switch(type) {
    case "name": 
      return (value.length > 0 && value.length < 50);
    case "email": 
      return (value.length > 0 && value.indexOf('@') && value.indexOf('.') > 0);
    case "message":
      return (value.length > 0);
    case "chkbox":
      return value;
  }
}