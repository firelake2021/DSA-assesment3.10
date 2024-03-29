const Queue = require("../queue/queue");

/**
 * Implement a Parking Lot.
 *
 */
class ParkingLot {
  constructor(capacity, rate) {
    this.spaces = new Array(capacity).fill("vacant");
    this.rate = rate;
    this.revenue = 0;
    this.queue = new Queue();
  }

  /**
   * Returns the number of vacant parking spaces
   * @returns {Number}
   *  the total number of spaces where the value is "vacant".
   */

  get vacantSpaces() {
    return this.spaces.reduce(
      (sum, space, index) => sum + (space === "vacant" ? 1 : 0),
      0
    );
  }

  /**
   * As cars enter the parking lot, the license plate number is entered and the car is parked in the first vacant space.
   * If the lot is full, the car is added to the queue to be parked when a spot is available.
   *
   * @param licensePlateNumber
   *  the license plate number of the car entering
   */
  enter(licensePlateNumber) {
    let freeSpot = false;
    for (let i = 0; i < this.spaces.length; i++) {
      if (this.spaces[i] === "vacant") {
        freeSpot = true;
        this.spaces[i] = licensePlateNumber;
        break;
      }
    }
    if (!freeSpot) {
      this.queue.enqueue(licensePlateNumber);
    }
  }

  /**
   * As a car leaves the parking lot, or the queue, the leave method is called with the license plate number of the car leaving.
   * @param licensePlateNumber
   *    *  the license plate number of the car leaving.
   */
  leave(licensePlateNumber) {
    let found = false;
    for (let i = 0; i < this.spaces.length; i++) {
      if (this.spaces[i] === licensePlateNumber) {
        this.spaces[i] = "vacant";
        found = true;
        this.revenue = this.revenue + this.rate;
        break;
      }
    }

    if (found) {
      let popped = this.queue.dequeue();
      for (let i = 0; i < this.spaces.length; i++) {
        if (this.spaces[i] === "vacant") {
          this.spaces[i] = popped;
          break;
        }
      }
    } else {
      let tempQueue = new Queue();
      let i = this.queue.isEmpty();
      while (!this.queue.isEmpty()) {
        let popped = this.queue.dequeue();
        let i = this.queue.length;
        if (popped != licensePlateNumber) {
          tempQueue.enqueue(popped);
        }
      }
      this.queue = tempQueue;
    }
  }

  /**
   * Lists each space in the parking lot along with the license plate number of the car parked there, or
   * "vacant" as the license plate if the spot is vacant.
   * @returns {{licensePlateNumber: string, space: Number}[]}
   */
  get occupants() {
    return this.spaces.map((licensePlateNumber, index) => ({
      space: index + 1,
      licensePlateNumber,
    }));
  }

  /**
   * The total cumulative revenue for the parking lot. The parking rate is paid when the car leaves, it does not matter how long the car stays in the spot.
   * @returns {number}
   *  the total revenue for the parking lot.
   */
  get totalRevenue() {
    return this.revenue;
  }
}

module.exports = ParkingLot;
