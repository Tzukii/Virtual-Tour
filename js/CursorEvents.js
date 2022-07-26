AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: { default: "", type: "string" }
    },
    init: function () {
        this.handleClickEvents();
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();

    },
    handleClickEvents: function () {
        this.el.addEventListener("click", evt => {
            const placesContainer = document.querySelector("#places-container");
            const { state } = placesContainer.getAttribute("tour");

            if (state === "places-list") {
                const id = this.el.getAttribute("id");
                const placesId = [
                    "taj-mahal",
                    "budapest",
                    "new-york-city",
                    "eiffel-tower"
                ];
                if (placesId.includes(id)) {
                    placesContainer.setAttribute("tour", {
                        state: "view",
                        selectedCard: id
                    });
                }
            }
        });
    },

    handlePlacesList: function () {
        const id = this.el.getAttribute("id");
        const placesId = ["taj-mahal", "budapest", "eiffel-tower", "new-york-city"];

        if (placesId.includes(id)) {
            const placesContainer = document.querySelector("#places-container");
            placesContainer.setAttribute("cursor-listener", {
                selectedItemId: id,
            });
            this.el.setAttribute("material", {
                color: "#D76B30",
                opacity: 1,
            });
        }
    },

    handleMouseEnterEvents: function () {
        this.el.addEventListener("mouseenter", () => {
            this.handlePlacesList();
        });
    },

    handleMouseLeaveEvents: function () {
        this.el.addEventListener("mouseleave", () => {
            const { selectedItemId } = this.data;
            if (selectedItemId) {
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if (id == selectedItemId) {
                    el.setAttribute("material", {
                        color: "#0077cc",
                        opacity: 1,
                    });
                }
            }
        });
    },


});