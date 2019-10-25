import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    id: DS.attr("number"),
    title: DS.attr("string"),
    description: DS.attr("string"),
    isDone: DS.attr("boolean"),
    createdAt: DS.attr("date")
});
