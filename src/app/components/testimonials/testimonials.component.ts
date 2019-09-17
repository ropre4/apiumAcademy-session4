import { Component, OnInit } from '@angular/core';

interface ITestimonial {
  name: string;
  testimonial: string;
  position: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  public testimonials: ITestimonial[] = [
    {
      name: 'Sebastian Vettel',
      testimonial: 'Me ha gustado mucho el curso de Frontend, me lo he pasado muy bien y el profesor era muy gracioso',
      position: 'Ferrari Driver'
    },
    {
      name: 'Lewis Hamilton',
      testimonial: 'No he prestado mucha tencion, estoy por ganar mi quinto campeonato del mundo, creo que eso es mas importante',
      position: 'Mercedes Driver'
    },
    {
      name: 'Charles Leclerc',
      testimonial: 'Soy el piloto revelacion del año, en Ferrari me adoran, he ganado 2 carreras seguidas cuando nadie se lo esperaba',
      position: 'Ferrari Driver'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
