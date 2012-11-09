<?php

namespace Application\Model;
/**
 * Does all setting and getting for model properties
 */
abstract class Proxy
{
    public function __set($property, $value)
    {
        if (!property_exists($this, $property))
        {
            throw new Exception("Invalid property $property");
        }
        else
        {
            $this->$property = $value;
        }
    }

    public function __get($property)
    {
        if (!property_exists($this, $property))
        {
            throw new Exception("Invalid property $property");
        }
        else
        {
            return $this->$property;
        }
    }

    public function __call($method, $args)
    {
        $value = null;

        if(!empty($args))
        {
            $value = $args[0];
        }

        if(preg_match('/set/', $method, $matches))
        {
            $prop = preg_replace("/set/", '', $method);

            $property = strtolower(preg_replace("/([A-Z])/", '_$1', $prop));

            if(property_exists($this, $property))
            {
                $this->$property = $value;
            }
            else
            {
                $property .' does not exist';
            }
            return $this;
        }
        elseif(preg_match('/get/', $method, $matches))
        {
            $prop = preg_replace("/get/", '', $method);

            $property = strtolower(preg_replace("/([A-Z])/", '_$1', $prop));

            if(property_exists($this, $property))
            {
                return $this->$property;
            }
            else
            {
                $property .' does not exist';
            }
        }
        else
        {
            throw new Exception("Invalid Method: $method trapped in __call()");
        }
    }

    public function setProperty($object)
    {
        $reflection = new ReflectionObject($object);

        foreach($reflection->getProperties() as $property)
        {
            $property->setAccessible(TRUE);
            if(!$property->isStatic())
            {
                $key = '_'.$property->getName();

                $this->$key = $property->getValue($object);
            }
        }

        return $this;
    }

    public function getProperties($object)
    {
        $array = array();

        $reflection = new ReflectionObject($object);

        foreach($reflection->getProperties(ReflectionProperty::IS_PROTECTED) as $property)
        {
            $property->setAccessible(TRUE);
            if(!$property->isStatic())
            {
                $array[preg_replace('/_/', '', $property->getName(), 1)] = $property->getValue($object);
            }
        }

        if(empty($array)) return;

        return $array;
    }

    public function setProperties(array $data)
    {
        foreach($data as $key=>$val)
        {
            if(!preg_match('/_/', $key, $matches))
            {
                $key = '_'.$key;
            }
            if(property_exists($this, $key))
            {
                $this->$key = $val;
            }
            else
            {
                $c = get_called_class();
                throw new Application_Model_Exception("Invalid Property $".$key." trapped in ".__METHOD__."
    	    	                                       <br />Please set explicitly in $c::create()");
            }
        }
    }

}